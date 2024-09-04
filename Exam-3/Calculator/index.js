const express = require('express');
const app = express();

app.use(express.json());
let history = [];
app.post('/calculator/add', (req, res, next) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return next(new Error('Invalid input, expected an array of numbers.'));
    }
    const result = numbers.reduce((acc, num) => acc + num, 0);
    history.push({ operation: 'addition', numbers, result });
    res.json({ result });
});


app.post('/calculator/subtract', (req, res, next) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return next(new Error('Invalid input, expected an array of at least two numbers.'));
    }
    const result = numbers.reduce((acc, num) => acc - num);
    history.push({ operation: 'subtraction', numbers, result });
    res.json({ result });
});


app.post('/calculator/multiply', (req, res, next) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return next(new Error('Invalid input, expected an array of numbers.'));
    }
    const result = numbers.reduce((acc, num) => acc * num, 1);
    history.push({ operation: 'multiplication', numbers, result });
    res.json({ result });
});


app.post('/calculator/divide', (req, res, next) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers) || numbers.length < 2) {
        return next(new Error('Invalid input, expected an array of at least two numbers.'));
    }
    const result = numbers.reduce((acc, num) => {
        if (num === 0) {
            return next(new Error('Division by zero is not allowed.'));
        }
        return acc / num;
    });
    history.push({ operation: 'division', numbers, result });
    res.json({ result });
});


app.get('/calculator/history', (req, res) => {
    res.json(history);
});


app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});