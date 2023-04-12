import axios from 'axios'

const state = {
  profile: null
}

const getters = {
  profile: state => state.profile
}

const mutations = {
  setProfile(state, profile) {
    state.profile = profile
  }
}

const actions = {
  fetchProfile({ commit }) {
    return axios.get('/user/profile')
      .then(response => {
        const profile = response.data
        commit('setProfile', profile)
        return profile
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
