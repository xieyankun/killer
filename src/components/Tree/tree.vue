<template>
  <div class="treeWrap" ref="treeWrap" id="mouse">
    <p>目录</p>
    <ul class="tree">
      <!-- <item class="item" v-for="(item, index) in treeData" :key="new Date().getTime()" :indexData="index" :model="item" @toggle="selectItem">
      </item> -->
      <li :class="{active: index == n}" 
          v-for="(tree, index) in treeData" 
          :key="new Date().getTime()" 
          @click="toggleMenu(tree, index)">
        {{tree.name}}
      </li>
    </ul>
    <div id="forRight">
      <key-menu></key-menu>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import EventBus from '@/components/EventBus'
import item from '@/base/kTree/index'
import KeyMenu from '@/components/RightKeyMenu/RightKeyMenu'
export default {
  components: {
    item,
    KeyMenu
  },
  data() {
    return {
      n: 0,
      showMenu: false
    }
  },
  computed: {
  },
  mounted() {
    let treeWrap = this.$refs.treeWrap
    var mouse = document.getElementById("mouse")
    var forRight = document.getElementById("forRight")

    mouse.oncontextmenu = function(event) {
      var e = event||window.event
      forRight.style.display = "block";
      forRight.style.left = event.clientX + "px"; 
      forRight.style.top = event.clientY - 36 + "px";  //鼠标的坐标啊
      console.log('0000')
      return false;   //这里返回false就是为了屏蔽默认事件
    }

    document.onclick = function(){
      forRight.style.display="none"
    }

  },
  computed: {
    treeData: function() {
      return this.$store.state.allFileData
    }
  },
  methods: {
    toggleMenu(item, index) {
      let data = {
        index: index,
      }
      // fileType: item.name.split('.').splice(-1)[0],
      // 当前操作的文件
      let optionFileData = Object.assign(data, item)
      // console.log('optionFileData', optionFileData)
      this.n = index
      // debugger
      this.$store.commit('toggleFile', optionFileData)
    }
  }
}
</script>

<style>
.treeWrap{
  width: 100%;
  height: 100%;
}
.item {
  cursor: pointer;
}
.active{
  color: red;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
#forRight{
  display: none;
  position: absolute;
}
</style>
