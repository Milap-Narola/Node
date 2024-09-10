const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 8000;


app.use(express.json());


app.post('/file/create', (req, res) => {
    const { filePath, data } = req.body;

    if (!filePath || typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    fs.appendFile(path.resolve(filePath), data, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create or append to file' });
        }
        res.status(200).json({ message: 'File created/updated successfully', filePath });
    });
});


app.put('/file/update', (req, res) => {
    const { filePath, data } = req.body;

    if (!filePath || typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    fs.writeFile(path.resolve(filePath), data, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update file' });
        }
        res.status(200).json({ message: 'File updated successfully', filePath });
    });
});


app.delete('/file/delete', (req, res) => {
    const { filePath } = req.body;

    if (!filePath) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    fs.unlink(path.resolve(filePath), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete file' });
        }
        res.status(200).json({ message: 'File deleted successfully', filePath });
    });
});

app.get('/file/read', (req, res) => {
    const { filePath } = req.query;

    if (!filePath) {
        return res.status(400).json({ error: 'Query parameter "filePath" is required' });
    }

    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        res.status(200).send(data);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
