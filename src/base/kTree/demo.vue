<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>

    <ul v-show="open" v-if="isFolder">
      <item class="item" v-for="model in model.children" :model="model">
      </item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
  import Item from './demo.vue'
  export default{
    components: {
      Item
    },
    props: {
      model: Object
    },
    data() {
      return {
        open: false
      }
    },
    beforeCreate() {
      console.log(this)
      // this.$options.components.item = require('./demo.vue')
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
      toggle: function () {
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
          name: 'new stuff'
        })
      }
    }
  }
</script>

<style>
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
