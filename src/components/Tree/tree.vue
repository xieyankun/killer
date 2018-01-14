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
      n: 0,
      treeData: this.$store.state.fileData
    }
  },
  computed: {
    // treeData: function(){
    //   return this.$store.state.fileData
    // }
  },
  mounted () {
    console.log(this.$store.state.fileData)
  },
  methods: {
    toggleMenu(item, index) {
      console.log(index, item)
      this.n = index
      this.$store.commit('toggleFile', index)
    },
    selectItem(item, index) {
      console.log(item, index)
      // this.$store.commit('toggleFile', index)
      // EventBus.$emit('toggleFile', index)
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
