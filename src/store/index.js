import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import toolbox from './modules/toolbox'
import { loadFileData } from './mutation-types'

Vue.use(Vuex)

const state = {
  fileData: loadFileData(),
  compile: false,
  toggleFile: 0
}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    toolbox
  },
  actions,
  mutations
})
