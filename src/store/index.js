import Vue from 'vue'
import Vuex from 'vuex'
import auth from './module/auth'
import user from './module/user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, user
  },
  plugins: [createPersistedState()] // 启用 vuex-persistedstate 插件
})
