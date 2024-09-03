const fs=require('fs')

let opr = process.argv[2]
let filename = process.argv[3]
let data = process.argv[4]

const createfile = () => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err.message);

        }
        else {
            console.log(filename, "create successfully...");

        }
    })
}

const adddata=()=>{
    fs.appendFile(filename, data,(err)=>{
        if(err){
            console.log(err.message);
            
        }
        else{
            console.log(filename,"append successfully");
            
        }
    })
}
const deletedata=()=>{
    fs.unlink(filename,(err)=>{
        if(err){
            console.log(err.message);
            
        }
        else{
            console.log(filename,"delete successfully");
            
        }
    }

    )
}

const renamefile=()=>{
    fs.rename(filename,filename,(err)=>{
        if(err){
            console.log(err.message);
            
        }

        else{
            console.log("file rename successfully");
            
        }
    })
}
const readfile=()=>{
    fs.readFile(filename,"UTF-8",(err,data)=>{
        if(err){
            console.log(err.message);
            
        }
        else{
            console.log(data);
            
        }
    })
}
if(opr=="create"){
    createfile()
}
else if(opr=="append"){
    adddata()
}
else if(opr=="delete"){
    deletedata()
}
else if(opr=="rename"){
    renamefile()
}
else if(opr=="read"){
    readfile()
}
