const data = require('./data')
const { ApolloServer, gql } = require('apollo-server')

const schema = gql(`
type Query {
  user(id: ID!): User
  checkUser(name: String!, password: String!): User
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
  sid: String
}

type Mutation {
  logIn(id: ID!): User
  logOut(id: ID!): User
}
`)

const resolvers = {
  Query: {
    user (_, { id }, { dataSources }) {
      const user = dataSources.users.find(u => u.id === id)
      return user
    },
    checkUser (_, { name, password }, { dataSources }) {
      const user = dataSources.users.find(u => (u.name === name && u.password === password))
      return user
    }
  },
  Mutation: {
    async logIn (_, { id }, { dataSources }) {
      const user = await dataSources.users.find(u => u.id === id)
      if (user) {
        user.sid = Buffer.from(user.id + new Date().getTime()).toString('base64')
        data.users.push(user)
        return user
      }
    },
    async logOut (_, { id }, { dataSources }) {
      const user = await dataSources.users.find(u => u.id === id)
      if (user) {
        user.sid = ''
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
  console.log('API server running at ' + url)
})
