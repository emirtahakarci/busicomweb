export default {
    startLoading({ commit }) {
      commit('setIsLoading', true)
    },
    stopLoading({ commit }) {
      commit('setIsLoading', false)
    }
  }
  