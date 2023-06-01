import ApiService from '@/services/ApiService'

const state = {
  users: []
}

const getters = {
  users(state) {
    return state.users
  }
}

const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

const actions = {
  async fetchUsers({ commit }) {
    const response = await ApiService.get('users')

    commit('setUsers', response)
  },

  async createUser({ dispatch }, user) {
    await ApiService.post('users', user)

    dispatch('fetchUsers')
  },

  async updateUser({ dispatch }, { id, user }) {
    await ApiService.put(`users/${id}`, user)

    dispatch('fetchUsers')
  },

  async deleteUser({ dispatch }, id) {
    await ApiService.delete(`users/${id}`)

    dispatch('fetchUsers')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
