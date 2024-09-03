const express = require('express');
const cors = require('cors');
const newsRouter = require('./routes/news.route');

const app = express();

app.use(cors());  
app.use(express.json()); 
app.use('/api/articles', newsRouter); 

app.listen(8090, () => {
    console.log('Server is running on port 8090');
});
