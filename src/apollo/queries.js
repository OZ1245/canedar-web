import gql from 'graphql-tag'

export default {
  CHECK_USER: gql`query ($name: String!, $password: String!) {
    checkUser(name: $name, password: $password) {
      id, name
    }
  }`,
  GET_USER: gql`query ($id: ID!) {
    user(id: $id) {
      id, name, email, sid
    }
  }
  `
}
