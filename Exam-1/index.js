const express = require('express');
const dbConnect = require('./config/db');
const userRouter = require('./routes/user.route');
const taskRouter = require('./routes/task.route');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ msg: "node js error" });
});

app.use("/user", userRouter);
app.use('/tasks', taskRouter);
app.listen(8080,()=>{
    console.log('Listening on port 8080');
    dbConnect
    
})