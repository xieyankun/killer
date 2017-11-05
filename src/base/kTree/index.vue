<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle(model)" @dblclick="changeType">
      <span v-if="isFolder > 1">
        <i v-if="open" class="icon iconfont icon-wenjian1"></i>
        <i v-else class="icon iconfont icon-folder"></i>
      </span>
      <span v-else>
        <i class="icon iconfont icon-wenjian"></i>
      </span>
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}] {{isFolder}}</span>
    </div>

    <ul v-show="open" v-if="isFolder">
      <item class="item" v-for="model in model.children" :model="model">
      </item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
  export default{
    props: {
      model: Object
    },
    data() {
      return {
        open: false
      }
    },
    beforeCreate() {
      this.$options.components.item = require('./index.vue')
    },
    created() {
    },
    mounted() {
      console.log(this.model)
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function (model) {
        console.log('model', model)
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          this.$set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild: function () {
        this.model.children.push({
          name: '新建文件'
        })
      }
    }
  }
</script>

<style>
  .item {
    cursor: pointer;
    font-size: 16px;
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
