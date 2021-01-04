const express = require('express');
const app = express();
const PORT = 3000;
// graphql stuff
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');