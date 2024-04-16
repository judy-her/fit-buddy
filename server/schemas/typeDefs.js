const typeDefs = `

type Category{
    _id: ID
    name : String
}

type Exercise {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
}

 type User {
    _id :ID!
    firstName: String!
    lastName: String!
    email : String!
 
 }

type Query {
    categories : [Category]
    exercises(category: ID, name: String) :[Exercise]
    exercise(_id: ID!) : Exercise  
}

type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
  
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    addExercise(exercise: [ID]!): Exercise
 
  }
`;

module.exports = typeDefs;
