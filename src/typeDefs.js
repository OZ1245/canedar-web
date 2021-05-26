const typeDefs = gql`
  scalar Date;

  type User {
    id: ID!
    login: String
    password: String
    notes: [Note]
  }

  type Note {
    id: ID!
    date: Date
    author: User
    title: String
    body: String
    tags: [Tags]
    type: Type!
  }

  type Tag {
    id: ID!
    body: String
  }

  type Type {
    id: ID!
    name: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    note(id: ID!): Note
    notes(author: ID!): [Note]!
    notesByDate(author: ID!, date: Date): [Note]!
    notesByTags(author: ID!, tags: [Tag]): [Note]!
    notesByType(author: ID!, type: Type): [Note]!
    tags: [Tag]!
    types: [Type]!
    type(id: ID!): Type
  }
`;

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar  // ...other resolver definitions...
};
