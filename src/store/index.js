import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

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
    isAuthenticated: false
  },
  mutations: {
    logOut (state) {
      state.isAuthenticated = false
    },
    logIn (state) {
      state.isAuthenticated = true
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
      context.commit('logIn')
    }
  }
}

export default new Vuex.Store({
  modules: {
    date: moduleDate,
    apollo: moduleApollo
  }
})
