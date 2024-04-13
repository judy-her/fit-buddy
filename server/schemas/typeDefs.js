const typeDefs = `
type Exercise {
    _id: ID!
    exerciseTitle: String!
    exerciseAuthor: String
}

type Query {
    exercises: [Exercise!]!
    exercise(exerciseId: ID!): Exercise
}

type Mutation {
    addExercise(exerciseTitle: String!, exerciseAuthor: String!): Exercise
    removeExercise(exerciseId: ID!): Exercise
}
`;

module.exports = typeDefs;
