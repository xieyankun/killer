<template>
  <div class="browser">
    <iframe class="resultIframe" frameBorder="0" ref="webConsole"></iframe>
  </div>
</template>

<script>
import EventBus from '@/components/EventBus'
import { showWebView } from '@/common/js/utils'
export default{
  props: {
    options: {
      type: Object,
      default: function() {
        return {role: 0, code: ''}
      }
    }
  },
  data() {
    return {
      items: [
        {library: '图片'},
        {library: 'jQuery.js'},
        {library: 'Bootstrap.js'},
        {library: 'Bootstrap.css'},
        {library: 'code基本结构'}
      ],
      quickFile: false,
      isHand: true   // 是否手动运行 true：手动运行，false：自动运行
    }
  },
  watch: {
    options: function () {
      if (!this.isHand) {
        this.compileWeb()
      }
    },
    iscompile: function() {
    }
  },
  computed: {
    iscompile: function() {
      return this.$store.state.compile
    }
  },
  created () {
  },
  mounted () {
    EventBus.$on('isCompile', () => {
      console.log('8888')
      this.compileWeb()
    })
  },
  methods: {
    showQuickFile () {
    },
    quickTool (index) {
    },
    checkHand() {
      this.isHand = !this.isHand
    },
    compileWeb() {
      console.log(this.options.code)
      let iframeWrap = this.$refs.webConsole
      let code = this.options.code
      showWebView(iframeWrap, code)
    }
  }
}
</script>
<style>
  .browser{
    width: 100%;
    height: 100%;
  }
  .resultIframe {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
  }
</style>