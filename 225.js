const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: "This is key",
    saveUninitialized: true,
    resave: false
}))

app.get("/",(req,res)=>{
    if(req.session.count){
        res.write(`<p>You have visited this site ${req.session.count++} times`);
    }else{
        req.session.count = 1
        res.write("<p>You have visited this site for the first time");
    }
    res.end()
})