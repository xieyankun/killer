<template>
  <div class="ide">
    <div class="tree-wrap">
    </div> 
    <div class="editor-wrap">
      <editor></editor>
    </div>
    <div class="browser-wrap">
      <div class="view">
        <browser :options="browserData"></browser>
      </div>
      <div class="console"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import Tree from '@/components/Tree/tree'
import Editor from '@/components/Editor/editor'
import Browser from '@/components/Browser/browser'
export default {
  components: {
    Editor,
    Browser
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    browserData: function() {
      let data = {
        code: this.$store.state.fileData.code
      }
      return data
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.ide
  width: 100%
  height: 100%
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
