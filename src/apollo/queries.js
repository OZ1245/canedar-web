import gql from 'graphql-tag'

export default {
  CHECK_USER: gql`query ($login: String!, $password: String!) {
    checkUser(login: $login, password: $password) {
      id, login
    }
  }`,
  GET_USER: gql`query ($id: ID!) {
    user(id: $id) {
      id, name, login, email, sid
    }
  }
  `
}
