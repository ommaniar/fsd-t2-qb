// Write an express.js script to define one JSON array of 3 objects having
// members name and age. Names must be sorted according to age. If user
// requests “sorted Names” URL, then all names should be printed
// according to ascending order of age

const express = require("express")
const app = express()

const arr = [
    {
        name: "ABC",
        age: 50
    },
    {
        name: 'XYZ',
        age: 40
    },
    {
        name: "PQR",
        age:56
    }
];

for(i in arr){
    for(j in arr){
        if(arr[i].age < arr[j].age){
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
}

app.get("/sorted_names",(req,res)=>{
    for(i of arr){
        res.write(`<p>${i.name}</p>`);
    }
    res.end()
})

app.listen(3000);

