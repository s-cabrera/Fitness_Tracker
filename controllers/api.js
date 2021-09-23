const router = require("express").Router();
const db = require("../models")
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
router.get("/exercise", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'))
})

//Get the workouts
router.get("/api/workouts/", async (req, res) => {
    const workout = await Workout.find({})
        .sort({ day: +1 });
    if(workout){
        console.log(workout)
        const results = await Workout.aggregate([
        { 
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                } 
            }
        }
        ]);
        console.log(results);
        res.status(200).json(results)
    }
    else{
        res.status(400).json("Something went wrong when retrieving your workouts")
    }
})

router.get("/api/workouts/range", async(req, res) => {
    const workout = await Workout.find({})
        .sort({ day: +1 });
    if(workout){
        console.log(workout)
        const results = await Workout.aggregate([
        { 
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                } 
            }
        }
        ]);
        console.log(results);
        res.status(200).json(results)
    }
    else{
        res.status(400).json("Something went wrong when retrieving your workouts")
    }
})


//Add exercise 
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    Workout.findByIdAndUpdate(
        { "_id": req.params.id },
        { "$push": { "exercises": req.body } },
        (err, data) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).send(data);
                console.log("Data updated!");
            }
        })
})

//create workout
router.post("/api/workouts/", (req, res) => {
    console.log(req.body);
    Workout.create(req.body)
        .then(workout => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;