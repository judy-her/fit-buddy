const { Schema, model } = require("mongoose");

// Define the schema for the Workout model
const workoutSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  exerciseId: {
    type: Schema.Types.ObjectId,
    ref: "Exercise", // Reference to the Exercise model
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Workout model
const Workout = model("Workout", workoutSchema);

// Export the Workout model
module.exports = Workout;
