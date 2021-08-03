import { gql } from 'apollo-server'

const schema = gql(`
type Query {
  user(id: ID!): User
  checkUser(name: String!, password: String!): Boolean
  checkUID(id: ID!, UID: String!): Boolean
}

type User {
  id: ID!
  name: String!
  password: String!
  email: String!
  UID: String!
}

type Mutation {
  setUID(id: ID!, UID: String!): User
}
`)

export { schema }
