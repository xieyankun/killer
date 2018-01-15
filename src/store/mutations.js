import {addCode, clearCode} from '@/common/js/editorStore'

export default {
  // 改变文件内容
  addAction(state, data) {
    console.log('data', data)
    state.allFileData = addCode(data)
  },
  // 切换目录
  toggleFile(state, data) {
    state.optionFileData = data
  },
  clearAction(state) {
    state.editorContent = clearCode()
  },
  isCompile(state) {
    // state.compile = !state.compile
  }
}
