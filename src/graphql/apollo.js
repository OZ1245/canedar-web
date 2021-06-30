// apollo.js
// This is everything we need to work with Apollo 2.0.
import Vue from 'vue'
// import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { typeDefs } from '@/data/user'
// Register the VueApollo plugin with Vue.
Vue.use(VueApollo)

// Create a new HttpLink to connect to your GraphQL API.
// According to the Apollo docs, this should be an absolute URI.
// const httpLink = new HttpLink({
//   uri: 'http://localhost:3020/graphql'
// })

// I'm creating another variable here just because it makes it easier to add more links in the future.
// const link = httpLink
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  typeDefs,
  user: {}
})
// const apolloClient = new ApolloClient({
//   // Tells Apollo to use the link chain with the http link we set up.
//   link,
//   // Handles caching of results and mutations.
//   cache: new InMemoryCache(),
//   // Useful if you have the Apollo DevTools installed in your browser.
//   connectToDevTools: true
// })

cache.writeData({
  data: {
    users: [
      {
        __typename: 'User',
        id: '1',
        name: 'Nadya',
        login: 'oz1245',
        password: '123456'
      }
    ]
  }
})

const apolloProvider = new VueApollo({
  // Apollo 2.0 allows multiple clients to be enabled at once.
  // Here we select the default (and only) client.
  defaultClient: apolloClient
})

export default apolloProvider
