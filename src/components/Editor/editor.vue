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
          autofocus: true,
          lineNumbers: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          tabSize: 4,
          // mode: 'text/html',
          line: true
        }
      }
    },
    editorData: {
      type: Object
    },
    editorContent: {
      type: String,
      default: function() {
        return ''
      }
    }
  },
  data() {
    return {
      roomId: this.$route.params.roomId,
      languageId: this.$route.params.languageId,
      codeContent: ''
    }
  },
  computed: {
    toggleFile: function() {
      return this.$store.state.toggleFile
    }
  },
  watch: {
    editorData() {
      console.log(this.editorData)
      this.editor.setOption("mode", this.editorData.type);
      this.editor.setValue(this.editorData.code)
    },
    editorContent() {
      console.log(this.editorContent)
      // this.editor.setOption("mode", 'text/css');
      // this.editor.setValue(this.editorContent)
    },
    toggleFile() {
    }
  },
  created() {
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor () {
      this.editor = CodeMirror.fromTextArea(this.$refs.codeEditor, this.options)

      this.editor.on('change', (instance, changeObj) => {
        let data = {
          index: this.$store.state.toggleFile,
          code: instance.getValue()
        }
        this.$store.commit('addAction', data)
        console.log(this.$store.state.toggleFile)
      })
      // 初始化编辑器内容
      // this.editor.setValue(this.$store.state.optionFileData.code)

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
