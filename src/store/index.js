import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import toolbox from './modules/toolbox'
import { loadFileData, loadOptData } from '@/common/js/editorStore'

Vue.use(Vuex)

const state = {
  allFileData: loadFileData(),  // 所有文件数据
  optionFileData: loadOptData(),  // 当前操作的文件
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
