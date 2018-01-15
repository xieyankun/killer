<template>
  <div class="treeWrap">
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
  </div>

</template>

<script>
/* eslint-disable */
import EventBus from '@/components/EventBus'
import item from '@/base/kTree/index'
export default {
  components: {
    item
  },
  data() {
    return {
      n: 0
    }
  },
  computed: {
  },
  mounted () {
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
</style>
