const express = require("express");
const app = express();
const path = require("path");
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})
app.get("/process-get",(req,res)=>{
    res.set("Content-Type","text/html");
    
    res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`)
    msg = req.query.msg.split(".");
    console.log(msg);
    for(i of msg){
        res.write(i + "<br>");
    }
    res.end()
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3000");
});
