import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null
}

const getters = {
  isLoggedIn: state => !!state.token,
  user: state => state.user
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  }
}

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', credentials)
        .then(response => {
          const token = response.data.access_token
          const user = response.data.user
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          commit('setToken', token)
          commit('setUser', user)
          resolve(response)
        })
        .catch(error => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          reject(error)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      commit('setToken', null)
      commit('setUser', null)
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
