<template>
  <div class="drag" ref="dragWrap">
    <div v-show="showULeft" class="item item-top up-left" ref="uLeft" >
      <slot name="uLeft"></slot>
    </div>
    <div v-show="showURight" class="item item-top up-right" ref="uRight">
      <slot name="uRight"></slot>
    </div>
    <div v-show="showDLeft" class="item item-down down-left" ref="dLeft">
      <slot name="dLeft"></slot>
    </div>
    <div v-show="showDRight" class="item item-down down-right" ref="dRight">
      <slot name="dRight"></slot>
    </div>

    <div :class="['dragPoint', {dragTrick:dragTrick}]" ref="point">
      <i class="icon iconfont icon-drag"></i>
    </div>
  </div> 
</template>

<script>
  /* eslint-disable */
  export default {
    props: {
      options: {
        type: Object,
        default: function() {
          return {layout: ''}
        }
      }
    },
    data () {
      return {
        newLeft: 0,
        newTop: 0,
        showULeft: true,
        showDLeft: true,
        showURight: true,
        showDRight: true,
        dragTrick: ''
      }
    },
    created () {
    },
    mounted () {
      this.initLayout()
      this.dragFun()
      this.resize()
    },
    methods: {
      initLayout() {
        let dragPoint = this.$refs.point
        let uLeft = this.$refs.uLeft
        let uRight = this.$refs.uRight
        let dLeft = this.$refs.dLeft
        let dRight = this.$refs.dRight
        let layout = this.options.layout || ''

        switch(layout){
          case 'r-l':
            this.showDLeft = this.showDRight = false
            uLeft.style.height = uRight.style.height = '100%'
            break;
          case 'u-d':
            this.showDLeft = this.showDRight = false
            uLeft.style.width = uRight.style.width = '100%'
            uRight.style.height = "260px"
            break;
          case 'r-2l':
            this.showDRight = false
            uLeft.style.width = '300px'
            uRight.style.width = dLeft.style.width = "calc(100% - 300px)"
            dragPoint.style.left = '288px'
            uLeft.style.height = '100%'
            break;
          default:
            break;
        }
      },
      dragFun() {
        let _this = this
        let dragWrap = this.$refs.dragWrap
        let uLeft = this.$refs.uLeft
        let uRight = this.$refs.uRight
        let dLeft = this.$refs.dLeft
        let dRight = this.$refs.dRight
        let dargPoint = this.$refs.point
        let layout = this.options.layout

        var disX
        var disY
        var pointLeft
        var pointTop

        dargPoint.onmousedown = function (e) {
          var event = e || window.event
          disX = event.clientX;
          disY = event.clientY;
          pointLeft = dargPoint.offsetLeft
          pointTop = dargPoint.offsetTop

          document.onmousemove = function (e) {
            var event = e || window.event

            var newLeft = _this.newLeft = pointLeft + event.clientX - disX + 12
            var newTop = _this.newTop = pointTop + event.clientY - disY + 12

            var dragWrapW = newLeft/dragWrap.clientWidth*100
            var dragWrapH = newTop/dragWrap.clientHeight*100

            dragWrapW = _this.borderLayout(dragWrapW, 10, 90) || dragWrapW
            dragWrapH = _this.borderLayout(dragWrapH, 10, 90) || dragWrapH

            _this.resetPoint(layout, dargPoint, dragWrapW, dragWrapH) 

            _this.resetLayout(layout, dragWrapW, dragWrapH, uLeft, uRight, dLeft, dRight)
            _this.dragTrick = true

          }

          document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
            _this.dragTrick = false
          }

          dargPoint.setCapture && dargPoint.setCapture()
          return false
        }
      },
      borderLayout(border, minSize, maxSize) {
        // 设置拖动时的边界值
        var newBorder;
        if (border < minSize) newBorder = minSize
          else if (border > maxSize) newBorder = maxSize
        return newBorder
      },
      resetPoint(layout, dargPoint, dragWrapW, dragWrapH) {
        // 设置拖动点的拖拽方式：上下、左右和任意方向
        switch(layout){
          case 'r-l':
            dargPoint.style.left = "calc(" + dragWrapW + "%" + " - 12px)"
            break;
          case 'u-d':
            dargPoint.style.top = "calc(" + dragWrapH + "%" + " - 12px)"
            break;
          default:
            dargPoint.style.left = "calc(" + dragWrapW + "%" + " - 12px)"
            dargPoint.style.top = "calc(" + dragWrapH + "%" + " - 12px)"
        }
      },
      resetLayout(layout, dragWrapW, dragWrapH, uLeft, uRight, dLeft, dRight) {
        // 拖动时重制布局
        switch(layout){
          case 'r-l':
            uLeft.style.width = dragWrapW + '%'
            uRight.style.width = (100 - dragWrapW) + '%'
            break;
          case 'u-d':
            uLeft.style.height = dragWrapH + '%'
            uRight.style.height = (100 - dragWrapH) + '%'
            break;
          case 'r-2l':
            uLeft.style.width = dragWrapW + '%'
            uRight.style.width = dLeft.style.width = (100 - dragWrapW) + '%'

            uRight.style.height = dragWrapH + '%'
            dLeft.style.height = (100 - dragWrapH) + '%'
            break;
          default:
            uLeft.style.width = dLeft.style.width = dragWrapW + '%'
            uRight.style.width = dRight.style.width = (100 - dragWrapW) + '%'

            uLeft.style.height = uRight.style.height = dragWrapH + '%'
            dLeft.style.height = dRight.style.height = (100 - dragWrapH) + '%'
        }

      },
      resize () {
        let _this = this
        let uLeft = _this.$refs.uLeft
        let point = _this.$refs.point

        window.onload = window.onresize = function (){
          console.log('uLeft.style.width', uLeft.style.width)
          // point.style.left = 'calc(' + uLeft.style.width + " - 12px)"
        }
      }
    }
  }
</script>

<style>
.drag{
  width: 100%;
  height: 100%;
  background-color: #F0F3F5;
  position: absolute;
  overflow: hidden;
}
.item{
  width: 50%;
  box-sizing: border-box;
  // border: 1px solid red;
  float: left;
}
.item-top{
  height: -webkit-calc(100% - 260px);
  height: -moz-calc(100% - 260px);
  height: calc(100% - 260px);
}
.item-down{
  height: 260px;
}

.dragPoint{
  position: absolute;
  width: 24px;
  height: 24px;
  top: calc(100% - 272px);
  left: calc(50% - 12px);
  cursor: pointer;
  border-radius: 12px;
  z-index:999;

  i{
    font-size:24px;
    color: #1FB6FF;
  }
}
.dragTrick{
}
.dragTrick:before{
  content: "";
  position: absolute;
  top:-500px;
  left:-500px;
  right:-500px;
  bottom:-500px;
}
.up-left{
  background-color: #999;
}
.up-right{
  background-color: #34a0ca;
}
.down-left{
  background-color: #34ca9a;
}
.down-right{
  background-color: #8bb525;
}
</style>
