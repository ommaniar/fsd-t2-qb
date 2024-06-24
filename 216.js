/**
 * write an express.js script to use of routing method using home , about ,
contact , temp page and print message. /home- welcome to my home
page , /about -welcome to my about page, /contact-welcome to my
contact page ,/temp - welcome to my temp pag
 */

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my home page</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>Thsi is about page</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to contact page</h1>");
})

app.get("/temp",(req,res)=>{
    res.send("<h1>This is temp page</h1>")
})

app.listen(3000,()=>{
    console.log("code running in http://localhost:3000")
})