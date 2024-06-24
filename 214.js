// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store
// username in session.
// 3) After saving session, redirect to fetchsession page and read session
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.htm

const express = require('express')
const session = require('express-session')

const app = express();
app.use(session({
    secret:'secret key'
}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/214_index.html");
})

app.get("/savesessionpage",(req,res)=>{
    user = req.query.username;
    req.session.name = user;
    res.redirect("/fetchsession")
})

app.get("/fetchsession",(req,res)=>{
    if(req.session.name){
        res.write(`<p> Hello ${req.session.name}</p>`);
        res.write("<a href='/logout'>Logout</a>")
    }
    res.end()
})

app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }
    })

    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("code running in http://localhost:3000")
})