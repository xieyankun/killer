<template>
  <div class="">
    <header>
      <tool-box></tool-box>
    </header>
    <section class="ide">
      <div class="tree-wrap">
        <tree></tree>
      </div> 
      <div class="editor-wrap">
        <editor ref="myEditor" :options="editorData" :editorContent='selectFileCode'></editor>
      </div>
      <div class="browser-wrap">
        <div class="view">
          <!-- <browser :options="browserData"></browser> -->
        </div>
        <div class="console"></div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import ToolBox from '@/components/Toolbox/toolbox'
import Tree from '@/components/Tree/tree'
import Editor from '@/components/Editor/editor'
import Browser from '@/components/Browser/browser'
export default {
  components: {
    ToolBox,
    Tree,
    Editor,
    Browser
  },
  data () {
    return {
      editorData: {
        autofocus: true,
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        tabSize: 4,
        mode: 'text/html',
        line: true
      }
    }
  },
  created () {
  },
  mounted () {
    // console.log('this.myEditor', this.myEditor)
  },
  watch: {
  },
  computed: {
    myEditor() {
      return this.$refs.myEditor.editor
    },
    selectFileCode() {
      let code = this.$store.state.selectFileCode
      return code
    }
  },
  methods: {
  },

}
</script>

<style lang="stylus">
.ide
  width: 100%
  height: calc(100% - 36px)
  position: absolute
  overflow: hidden
  background-color: #e0e3e4
  display: flex
  .tree-wrap
    width: 240px
  .editor-wrap
    flex: 1
  .browser-wrap
    width: 320px;
</style>
