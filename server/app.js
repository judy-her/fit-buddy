const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { buildSchema } = require('graphql');

const Event = require('./models/event');

const app = express();

app.use(bodyParser.json());

//cound be /api instead of /graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
    type Booking {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }
    
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
    }
    
     type User {
        _id :ID!
        email : String!
        password: String
        createdEvents: [Event!]
     }
    
    input EventInput {
        title: String!
        description: String!
        price: Float!
        date : String!
    }
    
    input UserInput {
        email: String!
        password: String!
    }
    
    type RootQuery {
        events: [Event!]!
        bookings: [Booking!]!
    }
    
    type RootMutation{
        createEvent(eventInput : EventInput): Event
        createUser(userInput : UserInput): User
        bookEvent(eventId: ID!): Booking!
        cancelBooking(bookingId: ID!): Event!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date(args.eventInput.date),
        });
        //save will save our data into the db as defined above
        return event
          .save()
          .then((result) => {
            console.log(result);
            return { ...result._doc };
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
    },
    graphiql: true,
  })
);

//connected to cluster in mongoDb Atlas
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.n61iu0b.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });

  mongodb+srv://judith85dm:<password>@cluster0.n61iu0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0