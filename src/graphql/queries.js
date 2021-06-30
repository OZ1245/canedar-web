import gql from 'graphql-tag'

export const userQuery = gql`
  {
    user @client {
      login
      password
    }
  }
`

export const changeUserMutation = gql`
  mutation($id: ID!) {
    checkUser(id: $id) @client
  }
`
