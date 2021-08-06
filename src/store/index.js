import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import graphqlClient from '@/utils/graphql'
import queries from '@/apollo/queries'
import mutations from '@/apollo/mutations'

Vue.use(Vuex)

const moduleDate = {
  state: {
    selectedDate: moment()
  },
  mutations: {
    changeDate (state, date) {
      state.selectedDate = date
    }
  },
  getters: {
    selectedDate: state => {
      return state.selectedDate
    }
  },
  actions: {
    changeDate (context, date) {
      context.commit('changeDate', date)
    }
  }
}

const moduleApollo = {
  state: {
    isAuthenticated: false,
    user: false
  },
  mutations: {
    logOut (state) {
      state.isAuthenticated = false
      state.user = false
    },
    logIn (state, user) {
      state.isAuthenticated = true
      state.user = user
    }
  },
  getters: {
    isAuthenticated ({ isAuthenticated, user }) {
      if (isAuthenticated && user) {
        const sid = graphqlClient.query({
          query: queries.GET_USER,
          variables: { id: user.id }
        })
        return (sid === user.sid)
      } else return false
    }
  },
  actions: {
    async logOut ({ commit, state: { user } }) {
      await graphqlClient.mutate({
        mutation: mutations.LOG_OUT,
        variables: { id: user.id },
        update: () => {
          commit('logOut')
        }
      })
    },
    async logIn ({ commit }, id) {
    // logIn (context, id) {
      await graphqlClient.mutate({
        mutation: mutations.LOG_IN,
        variables: { id: id },
        update: (_, { data: { sid } }) => {
          commit('logIn', { sid: sid })
          // context.commit('logIn', { sid: sid })
        }
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    date: moduleDate,
    apollo: moduleApollo
  }
})
