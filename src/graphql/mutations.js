import gql from 'graphql-tag'

export const LOGIN_USER = gql`
mutation login ($login: String!, $password: String!) {
  login (login: $login, password: $password) {
    token
  }
}
`

export const REGISTER_USER = gql`
mutation createUser ($login: String!, $email: String!, $password: String!) {
  createUser (login: $login, email: $email, password: $password) {
    token
  }
}
`
