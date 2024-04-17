// const typeDefs = `
//     type Exercise {
//         _id: ID!
//         exerciseTitle: String!
//         exerciseAuthor: String
//     }

//     type Query {
//         exercises: [Exercise!]!
//         exercise(exerciseId: ID!): Exercise
//     }

//     type Mutation {
//         addExercise(exerciseTitle: String!, exerciseAuthor: String!): Exercise
//         removeExercise(exerciseId: ID!): Exercise
//     }
// `;

// module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type AuthData {
        userId: ID!,
        token: String!,
        msg: String!
    }

    type Query {
        _dummy: String
    }

    type Mutation {
        login(username: String!, password: String!): AuthData!,
        createUser(username: String!, email: String!, password: String!): AuthData!
    }
`;

module.exports = typeDefs;