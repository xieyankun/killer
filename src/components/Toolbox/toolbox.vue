<template>
  <div class="toolbox">
    <i class="icon iconfont icon-qiehuan" @click.stop="checkHand"></i>
    <a href="javascript:;" v-if="isHand" @click.stop="compileWeb">点击运行</a>
    <a href="javascript:;" v-else>自动运行</a>
  </div>
</template>

<script>
import EventBus from '@/components/EventBus'
export default{
  props: {
  },
  data() {
    return {
      isHand: true   // 是否手动运行 true：手动运行，false：自动运行
    }
  },
  watch: {
  },
  methods: {
    checkHand() {
      this.isHand = !this.isHand
    },
    compileWeb() {
      EventBus.$emit('isCompile')
    }
  }
}
</script>
<style lang="stylus">
.toolbox
  width: 100%
  height: 36px;
  line-height: 36px;
  background-color: #053140
  // text-align: right;
  color: #fff;
</style>
