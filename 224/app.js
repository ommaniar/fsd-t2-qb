const express = require("express")
const app = express();
const cp = require("cookie-parser");

app.use(cp());
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"./form.html"}));

// You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
// Process a form with the following fields: Name, Email , Message ,
// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
// When the user submits the form, store their feedback information
// (name, email, message, and rating) in a cookie named "feedback" that
// expires in 10 seconds. Display a confirmation message to the user after
// successfully submitting the form & Create a link to display the
// feedback details stored in the "feedback" cookie. When the user click
// to the link, retrieve the feedback information from the cookie and
// display it on the page also include a link on the feedback details page
// to Logout. When the user clicks the link, user redirected to home page.
// Make app.js file use get method in express js. No need to write html
// file having form elements.


app.post("/process",(req,res)=>{
    res.set("Content-Type","text/html")
    let feedback = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        rating: req.body.rating
    }
    res.cookie("feedback",feedback,{
        expires: new Date(Date.now() + 10000)
    });
    res.write("<p>Your data has been seved</p>")
    res.write("<a href='/details'>Click here to see data</a>")
    res.end()
})

app.get("/details",(req,res)=>{
    let  feedback = req.cookies.feedback;
    if(feedback){
        res.write("<p>")
        res.write("name:" + feedback.name)
        res.write("</p>")
        res.write("<p>")
        res.write("email:" + feedback.email)
        res.write("</p>")
        res.write("<p>")
        res.write("message:" + feedback.message)
        res.write("</p>")
        res.write("<p>")
        res.write("rating:" + feedback.rating)
        res.write("</p>")
    }else{
        res.write("<p>No file found</p>");
    }
    res.write("<a href='/'>logout</a>");
    res.end()
});


app.listen(3000,()=>{
    console.log("code running in http://localhost:3000")
})