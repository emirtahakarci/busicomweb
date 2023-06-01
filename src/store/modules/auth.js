import ApiService from '@/services/ApiService'

const state = {
  token: localStorage.getItem('token') || null
}

const getters = {
  isAuthenticated(state) {
    return state.token !== null && state.user !== null
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },

  logout(state) {
    state.user = null
    state.token = null
    localStorage.removeItem('token')
  }
}

const actions = {
  async login({ commit }, credentials) {
    const response = await ApiService.post('auth/login', credentials)

    commit('setToken', response.token)

    return response
  },

  async logout({ commit }) {
    await ApiService.post('auth/logout')

    commit('logout')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}