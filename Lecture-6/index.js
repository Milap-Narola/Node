const express = require('express');
const db = require('../Lecture-6/db')
const User = require('../Lecture-6/user.schema')
const app = express();
app.use(express.json());

app.get ('/Teacher',async(req,res)=>{
let data= await User.find()
res.send(data)
})

app.post('/Teacher', async(req,res)=>{
let data= await User.create(req.body)
res.send(data)
})

app.patch('/TeacherUpdate', async(req,res)=>{
 let { id } = req.params
 let data= await User.findByIdAndUpdate(id, req.body, {new: true})
 res.send(data)
})


app.delete('/TeacherDelete/:id', async(req,res)=>{
    let { id } = req.params
    let data= await User.findByIdAndDelete(id)
    res.send(data)
}) 
app.listen(8090, () => {
    console.log('Server is running on port 8090');
    db();

})