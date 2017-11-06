import {addCode, clearCode} from './mutation-types'
export default {
  addAction(state, code) {
    console.log('action', code)
    state.fileData = addCode(code)
  },
  clearAction(state) {
    state.editorContent = clearCode()
  },
  isCompile(state) {
    // state.compile = !state.compile
  }
}
