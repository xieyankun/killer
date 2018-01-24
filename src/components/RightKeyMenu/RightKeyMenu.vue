<template>
  <div class="right-key-menu">
    <ul id="testRight"> 
      <li><a href="#">新建文件夹</a></li> 
      <li><a href="#">新建文件</a></li> 
      <li><a href="#">重命名</a></li> 
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
    }
  },
  mounted() {
    // let keyMenu = this.$refs.keyMenu
    // document.oncontextmenu = function(event){//这是实现的关键点
    // keyMenu.oncontextmenu = function(event) {  //这是实现的关键点
      // var e = event||window.event  //这个都不是问题了吧
      // forRight.style.display="block";
      // forRight.style.left=event.clientX + "px";
      // forRight.style.top=event.clientY + "px";  //鼠标的坐标啊
      // return false;   //这里返回false就是为了屏蔽默认事件
    // }
  }
}
</script>

<style>
  #testRight{
    width: 100px;
    background-color: yellow;
    position: absolute;
    z-index: 100;
  }
</style>
