<template>
  <div class="browser">
    <div class="web-menu">
      <div class="iterm-l web-iterm quickTool" @click.stop.prevent="quickFile=!quickFile">
        快速引入文件
        <ul class="drop-down-content" v-show="quickFile">
          <li v-for="(item, index) in items" @click.stop.prevent="quickTool(index)">
            <a href="javascript:;">{{item.library}}</a>
          </li>
        </ul>                 
      </div>   
      <div class="iterm-r web-iterm">
        <i class="icon iconfont icon-qiehuan" @click.stop="checkHand"></i>
        <a href="javascript:;" v-if="isHand" @click.stop="compileWeb">点击运行</a>
        <a href="javascript:;" v-else>自动运行</a>
      </div>   
    </div>
    <iframe class="resultIframe" frameBorder="0" ref="webConsole"></iframe>
  </div>
</template>

<script>
import { showWebView } from '@/common/js/utils'
export default{
  props: {
    options: {
      type: Object,
      default: function() {
        return {role: 0, html: ''}
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
        {library: 'HTML基本结构'}
      ],
      quickFile: false,
      isHand: true
    }
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
      console.log(this.options.html)
      let iframeWrap = this.$refs.webConsole
      let html = this.options.html
      showWebView(iframeWrap, html)
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
