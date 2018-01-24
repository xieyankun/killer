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
        <editor ref="myEditor" 
            :options="editorConfig" 
            :editorContent='selectFileCode' 
            :editorData="selectFileData">
        </editor>
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
import ToolBox from '@/components/ToolBox/ToolBox'
import Tree from '@/components/Tree/Tree'
import Editor from '@/components/Editor/Editor'
import Browser from '@/components/Browser/Browser'
export default {
  components: {
    ToolBox,
    Tree,
    Editor,
    Browser
  },
  data () {
    return {
      editorConfig: {
        autofocus: true,
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        tabSize: 4,
        // mode: 'htmlmixed',
        line: true
      }
    }
  },
  created () {
  },
  mounted () {
    // console.log('this.myEditor', this.myEditor)
    // this.myEditor.setOption("mode", 'text/css');
  },
  watch: {
  },
  computed: {
    myEditor() {
      return this.$refs.myEditor.editor
    },
    selectFileData() {
      let data = this.$store.state.optionFileData
      return data
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
