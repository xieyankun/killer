<template>
  <div class="anchor">
    <drag>       
      <div class="work" slot='uLeft'>
      </div>
      <div class="work" slot='dLeft'>
      </div>
      <div class="work" slot='uRight'>
      </div>
      <div class="work" slot='dRight'>
      </div>
    </drag>
  </div>
</template>

<script>
/* eslint-disable */
import Drag from '@/base/Drag'
import Editor from '@/components/Editor/editor'
export default {
  components: {
    Drag,
    Editor
  },
  data () {
    return {
      optionData: {
        layout: 'u-d'
      }
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
  .anchor{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  .dragWrap{
    position: relative;
    width: 100%;
    height: calc(100% - 48px);
    overflow: hidden;
  }
  .editor, .iterm-wrap{
    width: 100%;
    height: 100%;
  }
  .work{
    background-color: #999 !important;
  }
</style>
