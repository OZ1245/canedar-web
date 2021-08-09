const data = require('./data')
const { ApolloServer, gql } = require('apollo-server')

const schema = gql(`
type Query {
  user(id: ID!): User
  checkUser(login: String!, password: String!): User
}

type User {
  id: ID!
  login: String!
  name: String!
  password: String!
  email: String!
  sid: String
}

type Mutation {
  logIn(id: ID!): User
  logOut(id: ID!): User
  addUser(login: String!, email: String!, password: String!): User
}
`)

const resolvers = {
  Query: {
    user (_, { id }, { dataSources }) {
      const user = dataSources.users.find(u => u.id === id)
      return user
    },
    checkUser (_, { login, password }, { dataSources }) {
      const user = dataSources.users.find(u => (u.login === login && u.password === password))
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
    },
    async addUser (_, { login, email, password }, { dataSources }) {
      const errors = []
      if (await dataSources.find(u => (u.login === login))) {
        errors.push([
          { lang: 'en', message: 'A user with this login already exists.' },
          { lang: 'ru', message: 'Пользователь с таким логином уже существует.' }
        ])
      }
      if (await dataSources.find(u => (u.email === email))) {
        errors.push([
          { lang: 'en', message: 'A user with this email already exists.' },
          { lang: 'ru', message: 'Пользователь с таким email уже существует.' }
        ])
      }

      if (errors) {
        // TODO @ В зависимости от выбранного языка пользователем, выбирается язык для отображения ошибки.
        return new Error(errors.join('\n'))
      } else {
        // TODO
      }
      // const user = await dataSources.users.push({
      //
      // })
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
