import gql from 'graphql-tag'

export default {
  LOG_IN: gql`
    mutation ($id: ID!) {
      logIn(id: $id) {
        sid
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
