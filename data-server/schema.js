import { gql } from 'apollo-server'

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

export { schema }
