<template>
  <div id="kd_top">
    <van-nav-bar title="题库选择" left-text="" right-text="" :left-arrow="true" 
      @click-left="onClickLeft"

    />
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft(){
      this.$router.push('/practice')
    }
  },
};
</script>
<style lang="scss" scoped>
#kd_top {
  /deep/.van-ellipsis {
    font-size: 4.8vw;
  }
}
</style>
