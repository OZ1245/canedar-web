const { ApolloServer } = require('apollo-server');
// const data = require('data.js');
const typeDefs = require('typeDefs.js');

const server = new ApolloServer({ typeDefs });
