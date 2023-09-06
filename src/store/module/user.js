export default {

  namespaced: true,

  state: {
    user: {}
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  getters: {

  }

}
