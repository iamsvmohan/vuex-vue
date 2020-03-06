// import createLogger from '../../../src/plugins/logger'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  },
  strict: false,
  plugins: [createPersistedState({
    key: '_state'
  })]
})