<template>
  <div class="toolbox">
    <i class="icon iconfont icon-qiehuan" @click.stop="checkHand"></i>
    <a href="javascript:;" v-if="isHand" @click.stop="compileWeb">点击运行</a>
    <a href="javascript:;" v-else>自动运行</a>
    <a href="javascript:;" @click="addToCart()">添加</a>
  </div>
</template>

<script>
/* eslint-disable */ 
import EventBus from '@/components/EventBus'
import { mapGetters, mapActions } from 'vuex'
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
  methods: mapActions([
    'addToCart'
  ]),
  //   checkHand() {
  //     this.isHand = !this.isHand
  //     console.log(this.$store.state.toolbox.tool)
  //     this.$store.commit('compile')
  //   },
  //   compileWeb() {
  //     EventBus.$emit('isCompile')
  //   }
  // }
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
