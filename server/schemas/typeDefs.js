const typeDefs = `
  type Workout {
    _id: ID!
    exerciseId: ID!
    sets: Int!
    reps: Int!
    weight: Float!
    date: String!
    user: User!
  }

  type Exercise {
    _id: ID!
    name: String!
    description: String
    category: String
    # Define other fields as needed
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    # Define other fields as needed
  }

  type Query {
    workouts: [Workout]!
    exerciseInfo(exerciseId: ID!): Exercise
    workoutHistory: [Workout]!
  }

  type Mutation {
    logWorkout(exerciseId: ID!, sets: Int!, reps: Int!, weight: Float!): Workout
  }
`;

module.exports = typeDefs;
