const Exercise = require('../models/Exercise');

const resolvers = {
  Query: {
    exercises: async () => {
      return Exercise.find();
    },

    exercise: async (parent, { exerciseId }) => {
      return Exercise.findOne({ _id: exerciseId });
    },
  },

  Mutation: {
    addExercise: async (parent, { exerciseTitle, exerciseAuthor }) => {
      return Exercise.create({ exerciseTitle, exerciseAuthor });
    },

    removeExercise: async (parent, { exerciseId }) => {
      return Exercise.findOneAndDelete({ _id: exerciseId });
    },
  },
};

module.exports = resolvers;
