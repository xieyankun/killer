import {addCode, clearCode} from './mutation-types'
export default {
  addAction(state, code) {
    console.log('action', code)
    state.fileData.code = addCode(code)
  },
  clearAction(state) {
    state.editorContent = clearCode()
  }
}
