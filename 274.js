// js script to upload image (single image)
const express = require('express')
const app = express();
const multer = require('multer')

app.set('view engine','pug');

var storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
})

filter = (req,file,cb) =>{
    if(file.mimetype == "image/png"){
        cb(null,true);
    }else{
        cb(null,false);
        return cb("only png format allowed");
    }
}

var upload = multer({
    storage: storage
});

app.get("/",(req,res)=>{
    res.render(__dirname+"/file_upload.pug")
})
app.post("/process",upload.single('pic'),(req,res)=>{
    console.log(req.file)
    res.write(`<p>file ${req.file.originalname} is fetched successfully</p>`);
    res.end()
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})