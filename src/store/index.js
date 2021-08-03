import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import gql from 'graphql-tag'

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
    uid: ''
  },
  mutations: {
    logOut (state) {
      state.isAuthenticated = false
      state.uid = ''
    },
    logIn (state, uid) {
      state.isAuthenticated = true
      state.uid = uid
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    }
  },
  actions: {
    logOut (context) {
      context.commit('logOut')
    },
    logIn (context) {
      const uid = gql`

      `
      context.commit('logIn', {
        uid:
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
