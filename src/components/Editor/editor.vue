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
  created() {
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor () {
      this.editor = CodeMirror.fromTextArea(this.$refs.codeEditor, this.config)
      this.editor.on('change', (instance, changeObj) => {
        console.log(changeObj)
      })
    },
    clearContent: function() {
    }
  },
  computed: {
  }
}
</script>
