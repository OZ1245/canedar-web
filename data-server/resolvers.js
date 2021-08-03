import { data } from 'data.js'

const resolvers = {
  Query: {
    user (_, { id }) {
      const user = data.users.find(u => u.id === id)
      return user
    },
    checkUser (_, { name, password }) {
      const user = data.users.find(u => (u.name === name && u.password === password))
      return !(!user)
    },
    checkUID (_, { id, uid }) {
      const user = data.users.find(u => (u.id === id && u.UID === uid))
      return !(!user)
    }
  },
  Mutation: {
    setUID: async (_, { uid }, { id, data }) => {
      const user = data.users.find(u => u.id === id)
      user.UID = uid
      data.users.push(user)
      return user
    }
  }
}

export { resolvers }
