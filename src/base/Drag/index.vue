<template>
  <div class="drag" ref="dragWrap">
     <div class="item up-left" ref="uLeft">
       <slot name="uLeft"></slot>
     </div>
     <div class="item up-right" ref="uRight">
       <slot name="uRight"></slot>
     </div>
     <div class="item down-left" ref="dLeft">
       <slot name="dLeft"></slot>
     </div>
     <div class="item down-right" ref="dRight">
       <slot name="dRight"></slot>
     </div>
     <div class="dragPoint" ref="point"></div>
  </div> 
</template>

<script>
  /* eslint-disable */
  export default {
    data () {
      return {
        newLeft: 0,
        newTop: 0
      }
    },
    created () {
    },
    mounted () {
      this.dragFun()
      this.resize()
    },
    methods: {
      dragFun () {
        let _this = this
        let dragWrap = this.$refs.dragWrap
        let uLeft = this.$refs.uLeft
        let uRight = this.$refs.uRight
        let dLeft = this.$refs.dLeft
        let dRight = this.$refs.dRight
        let point = this.$refs.point

        console.log(dragWrap.offsetWidth)
        var disX
        var disY
        var pointLeft
        var pointTop

        point.onmousedown = function (e) {
          var event = e || window.event
          disX = event.clientX;
          disY = event.clientY;
          pointLeft = point.offsetLeft
          pointTop = point.offsetTop

          console.log('event.clientX', event.clientX)
          console.log('dragWrap', dragWrap.offsetTop)

          document.onmousemove = function (e) {
            var event = e || window.event

            var newLeft = _this.newLeft = pointLeft + event.clientX - disX
            var newTop = _this.newTop = pointTop + event.clientY - disY

            var dragWrapW = newLeft/dragWrap.clientWidth*100
            var dragWrapH = newTop/dragWrap.clientHeight*100

            if (dragWrapW < 10) dragWrapW = 10
              else if (dragWrapW > 90) dragWrapW = 90

            if (dragWrapH < 10) dragWrapH = 10
              else if (dragWrapH > 90) dragWrapH = 90

            point.style.left = 'calc(' + dragWrapW + '%' + " - 12px)"
            point.style.top = 'calc(' + dragWrapH + '%' + " - 12px)"

            uLeft.style.width = dLeft.style.width = dragWrapW + '%'
            uRight.style.width = dRight.style.width = (100 - dragWrapW) + '%'

            uLeft.style.height = uRight.style.height = dragWrapH + '%'
            dLeft.style.height = dRight.style.height = (100 - dragWrapH) + '%'

          }

          document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
          }
          point.setCapture && point.setCapture()
          return false
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

<style lang="scss">
.drag{
  width: 100%;
  height: 100%;
  background-color: #999;
  position: absolute;
  overflow: hidden;

  .item{
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    // border: 1px solid red;
    float: left;
  }

  .dragPoint{
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: blue;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
    cursor: pointer;
    border-radius: 12px;
  }

  .up-left{
    background-color: yellow;
  }
  .up-right{
    background-color: #00ffff;
  }
  .down-left{
    background-color: #4caf50;
  }
}

</style>
