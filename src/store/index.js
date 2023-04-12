import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import auth from './modules/auth'
import user from './modules/user'

export default new Vuex.Store({
  modules: {
    auth,
    user
  },
  actions,
  getters,
  mutations,
  state
})
