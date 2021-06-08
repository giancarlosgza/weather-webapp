import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  getters: {
    darkMode: state => state.darkMode,
  },
  mutations: {
    SET_DARK_MODE(state, darkMode) {
      state.darkMode = darkMode
    }
  },
  actions: {},
  modules: {}
})
