import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import toolbox from './modules/toolbox'
import { loadFileData } from '@/common/js/editorStore'

Vue.use(Vuex)

const state = {
  fileData: loadFileData(),
  allFileData: loadFileData(),  // 所有文件数据
  optionFileData: {   // 当前操作的文件
    path: '/',
    name: 'index.html',
    code: 'abc'
  },
  compile: false,
  selectFileCode: '',
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
