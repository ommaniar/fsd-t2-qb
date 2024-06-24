const express = require('express');
const app = express()

app.use(express.static(__dirname));

console.log(__dirname)
app.listen(3000,()=>{
    console.log("code running in http://localhost:3000")
})