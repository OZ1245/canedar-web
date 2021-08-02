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

export default new Vuex.Store({
  modules: {
    date: moduleDate
  }
})
