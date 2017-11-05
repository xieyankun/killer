<!-- <template>
  <div class="treeWrap">
    <p>目录</p>
    <ul class="tree">
      <item
        class="item"
        :model="treeData">
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
      treeData: {
        name: '目录',
        children: [
          {name: '目录111'},
          {
            name: '目录一',
            children: [
              {name: '目录一'},
              {name: '目录二'}
            ]
          },
          {name: '目录二'}
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
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
 -->