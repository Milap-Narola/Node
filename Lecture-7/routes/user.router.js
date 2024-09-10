const { Router } = require('express');
const upload = require('../controllers/user.controller')

const userRouter =Router()

userRouter.post('/upload',upload.single('img'),(req,res)=>{
    console.log('req.file',req.file);

    res.send('File uploaded successfully');

    
})

module.exports = userRouter;