const express = require('express');
const app = express();
const api = require("./271");
app.use("/a",api);
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})