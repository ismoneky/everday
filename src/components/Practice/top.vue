<template>
  <div id="lx_top">
    <van-nav-bar title="练习" left-text="" right-text="" :left-arrow="false" />
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#lx_top {
  /deep/.van-ellipsis {
    font-size: 4.8vw;
  }
}
</style>
