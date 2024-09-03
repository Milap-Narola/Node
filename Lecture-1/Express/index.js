const express = require('express')

const app = express();


app.get("/api",(req,res)=>{
    res.send("Welcome To The App!"); 
})


app.get("/js",(req,res)=>{
    res.send("This Is JavaScript || ");
})


// port
app.listen(5322, () => {

    console.log("Server Listening  On 5322 ||");
})