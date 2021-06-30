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
      console.log(date)
      // state.selectedDate = { ...state.selectedDate, ...date }
      state.selectedDate = date
      console.log(state.selectedDate)
    }
  },
  getters: {
    selectedDate: state => {
      console.log(state.selectedDate)
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
