export default {

  namespaced: true,

  state: {
    isAuthenticated: false,
    isAdmin: false
  },

  mutations: {
    setAuth (state, { isAuthenticated, isAdmin }) {
      state.isAuthenticated = isAuthenticated
      state.isAdmin = isAdmin
    }
  },

  getters: {

  }
}
