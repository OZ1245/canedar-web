// import { ApolloServer } from 'apollo-server'
// import { schema } from './schema.js'
// import { resolvers } from './resolvers.js'
const { ApolloServer, gql } = require('apollo-server')

const schema = gql(`
type Query {
  user(id: ID!): User
  checkUser(name: String!, password: String!): Boolean
  checkUID(id: ID!, uid: String!): Boolean
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
  uid: String!
}

type Mutation {
  setUID(id: ID!): User
}
`)

const data = {}

data.users = [
  {
    id: 'test-1',
    name: 'test',
    password: 'testtest',
    email: 'test@test.test',
    uid: ''
  }
]

const resolvers = {
  Query: {
    user (_, { id }, { dataSources }) {
      const user = dataSources.users.find(u => u.id === id)
      return user
    },
    checkUser (_, { name, password }, { dataSources }) {
      const user = dataSources.users.find(u => (u.name === name && u.password === password))
      return !(!user)
    }
  },
  Mutation: {
    setUID: async (_, { id }, { dataSources }) => {
      const user = await dataSources.users.find(u => u.id === id)
      if (user) {
        user.uid = Buffer.from(user.id + new Date().getTime()).toString('base64')
        data.users.push(user)
        return user
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  dataSources: () => ({
    users: data.users
  })
})

server.listen(2001).then(({ url }) => {
  console.log('API server running at localhost:2001')
  console.log(url)
})
