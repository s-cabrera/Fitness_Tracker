const router = require("express").Router();
const Workout = require("../models/schema.js");
const path = require("path");

// Get the homepage route: /
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

// Get the stats.html - route : /stats
router.get("/stats", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/stats.html'))
})

//Get the exercise.html - route: /exercise
router.get("/exercise", (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'))
})

//Get the workouts
router.get("/api/workouts/", (req, res) => {
    Workout.find({})
        .sort({ day: +1 })
        .then(workout => {
            res.status(200).json(workout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

//Add exercise 
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    Workout.findByIdAndUpdate(
        {"_id": req.params.id}, 
        {"$push": { "exercises": req.body }}, 
        (err, data) => {
            if(err){
                res.status(400).json(err);
            }
            else{
                res.status(200).send(data);
                console.log("Data updated!");
            }
    })
})



module.exports = router;