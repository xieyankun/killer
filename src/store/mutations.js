import {addCode, clearCode} from './mutation-types'
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
  toggleFile(state, index) {
    console.log('index', index)
    state.toggleFile = index
  }
}
