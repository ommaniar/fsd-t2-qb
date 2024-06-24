// Process a form using post method. Form has fields like username, password, confirm password, gender, submit and reset buttons. After
// entering all fields, If password and confirm password matches, then form should be processed and all relevant and selected fields’ values
// should be printed. Otherwise, by printing warning message in red color, it should terminate. No need to write file having form
// elements.

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/212_form.html");
})

app.post("/process",(req,res)=>{
    var a = req.body;
    if(a.password == a.cpass){
        console.log(a)
        res.write(`<p>
        Username: ${a.username} </p><p>
        gender: ${a.gender}
            </p>`)
    }else{
        res.write("<h1 style='color:red'>Warning password doesnt match with confirm password please try again");
    }
    res.end()
})

app.listen(3000,()=>{
    console.log("code running in http://localhost:3000")
})