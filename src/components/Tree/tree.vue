<template>
  <div class="treeWrap">
    <p>目录</p>
    <ul class="tree">
      <item class="item" v-for="item in treeData" :model="item" @toggle="selectItem">
      </item>
    </ul>
  </div>

</template>

<script>
/* eslint-disable */
import item from '@/base/kTree/index'
export default {
  components: {
    item
  },
  data() {
    return {
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
    selectItem(item) {
      console.log(item)

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
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
