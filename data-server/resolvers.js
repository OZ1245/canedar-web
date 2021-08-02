import { data } from 'data.js'

const resolvers = {
  Query: {
    user (parent, args) {
      const user = data.users.find(u => u.id === args.id)
      return user
    },
    checkUser (parent, args) {
      const user = data.users.find(u => (u.name === args.name && u.password === args.password))

      return !(!user)
    }
  }
}

export { resolvers }
