// Import necessary modules/models
const { Workout, Exercise, User } = require("../models");

const resolvers = {
  Query: {
    // Query to retrieve all workouts logged by the user
    workouts: async (parent, args, { user }) => {
      // Ensure user is authenticated
      if (!user) {
        throw new Error("Authentication required");
      }
      // Query workouts for the authenticated user
      return Workout.find({ userId: user.id }).sort({ createdAt: -1 });
    },
    // Query to retrieve exercise information by ID
    exerciseInfo: async (parent, { exerciseId }) => {
      // Query exercise information by ID from the wger API or database
      // Implement logic to fetch exercise info from wger API or database
      // Example:
      // const exerciseInfo = await Exercise.findById(exerciseId);
      // return exerciseInfo;
    },
    // Query to retrieve workout history for the authenticated user
    workoutHistory: async (parent, args, { user }) => {
      // Ensure user is authenticated
      if (!user) {
        throw new Error("Authentication required");
      }
      // Query workout history for the authenticated user
      return Workout.find({ userId: user.id }).sort({ date: -1 });
    },
  },
  Mutation: {
    // Mutation to log a workout for the authenticated user
    logWorkout: async (
      parent,
      { exerciseId, sets, reps, weight },
      { user }
    ) => {
      // Ensure user is authenticated
      if (!user) {
        throw new Error("Authentication required");
      }
      // Create a new workout entry for the authenticated user
      const workout = new Workout({
        userId: user.id,
        exerciseId,
        sets,
        reps,
        weight,
        date: new Date(),
      });
      // Save the workout entry to the database
      return workout.save();
    },
  },
};

module.exports = resolvers;
