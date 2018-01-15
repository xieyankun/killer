<template>
  <div class="browser">
    <iframe class="resultIframe" frameBorder="0" ref="webConsole"></iframe>
  </div>
</template>

<script>
/* eslint-disable */
import EventBus from '@/components/EventBus'
import { showWebView } from '@/common/js/utils'
export default{
  props: {
    options: {
      type: Object,
      default: function() {
        return {role: 0, code: '000'}
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
    // options: function () {
    //   let iframeWrap = this.$refs.webConsole
    //   var code = this.$store.state.fileData.code
    //   this.showWebView(iframeWrap, code)
    // },
    // iscompile: function() {
    // }
  },
  computed: {
    // iscompile: function() {
    //   return this.$store.state.compile
    // },
    // fileData: function() {
    //   let data = this.$store.state.fileData
    //   let iframeWrap = this.$refs.webConsole
    //   this.showWebView(iframeWrap, data[0].code)
    //   return data
    // }
  },
  created () {
    console.log('this.options', this.options)
  },
  mounted () {
    let iframeWrap = this.$refs.webConsole
    let code = this.options.code
    // this.showWebView(iframeWrap, '1234567890')
    // EventBus.$on('isCompile', () => {
    //   console.log('8888')
    //   this.compileWeb()
    // })
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
    },
    showWebView(iframe, code) {
      var doc

      if(iframe.contentDocument){
        doc = iframe.contentDocument
      }else if(iframe.contentWindow){
        doc = iframe.contentWindow.document
      }else{
        doc = iframe.document
      }

      doc.open()
      doc.writeln(code)
      doc.close()
    }

  }
}
</script>
<style>
  .browser{
    width: 100%;
    height: 100%;
    background-color: #999;
  }
  .resultIframe {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
  }
</style>