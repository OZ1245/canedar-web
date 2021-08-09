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
      localStorage.removeItem('uid')
      localStorage.removeItem('sid')
    },
    logIn (state, user) {
      state.isAuthenticated = true
      state.user = user
      localStorage.setItem('uid', user.id)
      localStorage.setItem('sid', user.sid)
    },
    init (state, { isAuthenticated, user }) {
      state.isAuthenticated = isAuthenticated
      state.user = user
    }
  },
  getters: {
    isAuthenticated ({ isAuthenticated }) {
      return isAuthenticated
    },
    userName ({ user }) {
      return user.name
    }
  },
  actions: {
    async apolloInit ({ commit }) {
      console.log(localStorage.getItem('uid'))
      console.log(localStorage.getItem('sid'))
      if (localStorage.getItem('uid') && localStorage.getItem('sid')) {
        const o = await graphqlClient.query({
          query: queries.GET_USER,
          variables: { id: localStorage.getItem('uid') }
        })
        if (localStorage.getItem('sid') === o.data.user.sid) {
          commit('init', { isAuthenticated: true, user: o.data.user })
        }
      } else {
        commit('init', { isAuthenticated: false, user: false })
      }
    },
    async logOut ({ commit, state: { user } }) {
      if (user) {
        await graphqlClient.mutate({
          mutation: mutations.LOG_OUT,
          variables: { id: user.id },
          update () {
            commit('logOut')
          }
        })
      } else {
        commit('logOut')
      }
    },
    async logIn ({ commit }, id) {
      await graphqlClient.mutate({
        mutation: mutations.LOG_IN,
        variables: { id: id },
        update (_, { data: { logIn } }) {
          if (logIn) {
            commit('logIn', logIn)
          }
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
