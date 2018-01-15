import {addCode, clearCode} from '@/common/js/editorStore'
export default {
  addAction(state, data) {
    console.log('data', data)
    state.fileData = addCode(data)
  },
  clearAction(state) {
    state.editorContent = clearCode()
  },
  isCompile(state) {
    // state.compile = !state.compile
  },
  toggleFile(state, data) {
    state.selectFileCode = data.data.code
    state.toggleFile = data.index
  }
}
