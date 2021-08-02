// import { ApolloServer } from 'apollo-server'
// import { schema } from './schema.js'
// import { resolvers } from './resolvers.js'
const { ApolloServer, gql } = require('apollo-server')

const schema = gql(`
type Query {
  user(id: ID!): User
  checkUser(name: String!, password: String!): Boolean!
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
}
`)

const data = {}

data.users = [
  {
    id: 'test-1',
    name: 'test',
    password: 'testtest',
    email: 'test@test.test'
  }
]

const resolvers = {
  Query: {
    user (_, { id }) {
      const user = data.users.find(u => u.id === id)
      return user
    },
    checkUser (_, { name, password }) {
      const user = data.users.find(u => (u.name === name && u.password === password))

      return !(!user)
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
})

server.listen(2001).then(({ url }) => {
  console.log('API server running at localhost:2001')
  console.log(url)
})
