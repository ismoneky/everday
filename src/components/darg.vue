<template>
    <div class="darg" v-hulr>
      <i class="iconfont icon-xinfeng"></i>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
  directives: {
    hulr(el) {
      var maxW = document.documentElement.clientWidth;
      var maxH = document.documentElement.clientHeight;
      var startX = 0;
      var startY = 0;
      el.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].pageX - this.offsetLeft;
        startY = e.targetTouches[0].pageY - this.offsetTop;
      },false);
      el.addEventListener("touchmove", function(e) {
        var leftX = e.targetTouches[0].pageX - startX;
        var topY = e.targetTouches[0].pageY - startY;
        var thisW = e.targetTouches[0].target.clientWidth;
        var parentW = e.targetTouches[0].target.offsetParent.clientWidth;
        var thisH = e.targetTouches[0].target.clientHeight;
        var parentH = e.targetTouches[0].target.offsetParent.clientHeight;
        
        this.style.left = leftX + "px";
        this.style.top = topY + "px";
      },false);
      el.addEventListener("touchend", function(e) {},false);
    },
  },
};
</script>

<style lang="scss" scoped>
.darg {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 100px;
  right: 20px;
  background: blue;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  i {
    font-size: 26px;
  }
}
</style>
