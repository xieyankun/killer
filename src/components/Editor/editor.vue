<template>
  <textarea ref="codeEditor"></textarea>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import '@/utils/minEmmet'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/theme/base16-dark.css'
import { getMode } from '@/common/js/utils'
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
    this.config.mode = getMode(this.languageId)
  },
  mounted() {
    this.initEditor()
    console.log(this.options)
  },
  methods: {
    initEditor () {
      let _this = this
      if (!this.options.isWrite) {
        this.config.readOnly = true
      }
      this.editor = CodeMirror.fromTextArea(this.$refs.codeEditor, this.config)
      this.editor.on('change', (instance, changeObj) => {
        console.log(_this.isLive)
        // 可编辑的时候
        if (this.options.isWrite) {
          this.$store.commit('addAction', instance.getValue())
        }
        if (this.isLive) {
          this.socket.emit('action.code', changeObj, this.roomId, instance.getValue())
        }
      })
    },
    clearContent: function() {
    }
  },
  computed: {
  }
}
</script>
