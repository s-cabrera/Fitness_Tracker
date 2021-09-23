const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date
    },
    exercises: Array//[{
        // name: {
        //     type: String,
        //     trim: true,
        //     required: 'Name is required'
        // },
        // type: {
        //     type: String,
        //     trim: true,
        //     required: 'Type is required'
        // },
        // weight: {
        //     type: SchemaTypes.Double,
        //     trim: true,
        //     require: "Weight is required"
        // },
        // sets: {
        //     type: Number,
        //     trim: true,
        //     require: "Number of sets is required"
        // },
        // reps: {
        //     type: Number,
        //     trim: true,
        //     required: "Number of reps is required"
        // },
        // duration: {
        //     type: String,
        //     trim: true,
        //     require: "Duration is required"
        // },
        // distance: {
        //     type: SchemaTypes.Double,
        //     trim: true,
        // }
    //}]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
