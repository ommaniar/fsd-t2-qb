// Write an expressJS code in which RESTapi is created for json object named Places I love which
// contains name,country,state,city and rating out of 10(no decimal points) is given.upon passing
// ratings on the browser it should display the places having that rating.i.e. on
// localhost:30001/a/10 should display all the places having 10 ratings.

const express = require('express');
const router = express.Router()
const data = [
    {
        name: "Name1",
        country: "country1",
        state: "state1",
        rating: 5
    },
    {
        name: "name2",
        country: "country2",
        state: "state2",
        rating: 6
    },
    {
        name: "name3",
        country: "country3",
        state: "state3",
        rating: 9
    }
]

router.get("/:rating",(req,res)=>{
    var i = data.filter(place => place.rating == req.params.rating)
    if(i.length != 0){
        res.json(i[0])
    }else{
        res.json("not found")
    }
})

module.exports = router