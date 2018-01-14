<template>
  <textarea ref="codeEditor"></textarea>
</template>

<script>
/* eslint-disable */
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import '@/common/js/minEmmet'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/theme/base16-dark.css'
import EventBus from '@/components/EventBus'
export default{
  components: {
  },
  props: {
    isLive: {
      type: [String, Boolean],
      default: function() {
        return false
      }
    },
    options: {
      type: Object,
      default: function() {
        return {
          isLive: false,
          isWrite: true
        }
      }
    }
  },
  data() {
    return {
      roomId: this.$route.params.roomId,
      languageId: this.$route.params.languageId,
      config: {
        autofocus: true,
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        tabSize: 4,
        mode: 'text/html',
        line: true
      },
      codeContent: ''
    }
  },
  computed: {
    toggleFile: function() {
      return this.$store.state.toggleFile
    }
  },
  watch: {
    toggleFile: function() {
      console.log('----')
    }
  },
  created() {
  },
  mounted() {
    this.initEditor()
    EventBus.$on('toggleFile', (index) => {
      let code = this.$store.state.fileData[index]
      console.log('----', index, code)
      this.editor.setValue(code)
    })
  },
  methods: {
    initEditor () {
      this.editor = CodeMirror.fromTextArea(this.$refs.codeEditor, this.config)
      this.editor.on('change', (instance, changeObj) => {
        // console.log(instance.doc.redo)
        // console.log(this.$store.state.fileData)
        // this.editor.redo()
        console.log(this.$store.state.toggleFile)
        let data = {
          index: this.$store.state.toggleFile,
          code: instance.getValue()
        }
        this.$store.commit('addAction', data)
      })
      this.editor.on('redo', (instance, changeObj) => {
        console.log('redo', instance)
      })
      // this.editor.redo()
    },
    clearContent: function() {
    }
  },
  computed: {
  }
}
</script>
