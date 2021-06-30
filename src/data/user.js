import gql from 'graphql-tag'
import { userQuery } from '@/graphql/queries'

export const typeDefs = gql`
  type User {
    id: ID!
    login: String!
    password: String,
    email: String
    UID: String!
  }

  type Mutation {
    changeUser(id: ID!): Boolean
    deleteUser(id: ID!): Boolean
    addUser(login: String!, password: String!, email: String!, UID: String!): User
  }
`

export const user = {
  Mutation: {
    checkUser: (_, { id }, { cache }) => {
      const data = cache.readQuery({ query: userQuery })
      const currentUser = data.user.find(user => user.id === id)
      currentUser.done = !currentUser.done
      cache.writeQuery({ query: userQuery, data })
      return currentUser.done
    }
  }
}
