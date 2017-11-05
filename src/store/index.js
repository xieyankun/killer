import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import { loadFile } from './mutation-types'

Vue.use(Vuex)

let filedata = {
  name: '测试项目',
  editorContent: ''
}

const state = {
  fileData: loadFile
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
