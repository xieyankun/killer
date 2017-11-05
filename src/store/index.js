import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import { loadFileData } from './mutation-types'

Vue.use(Vuex)

const state = {
  fileData: loadFileData()
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
