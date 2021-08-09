import gql from 'graphql-tag'

export default {
  LOG_IN: gql`
    mutation ($id: ID!) {
      logIn(id: $id) {
        id, login, name, email, sid
      }
    }
  `,
  LOG_OUT: gql`
    mutation ($id: ID!) {
      logOut(id: $id) {
        id
      }
    }
  `
}
