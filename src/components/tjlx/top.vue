<template>
  <div id="tjlx_top">
   <van-nav-bar title="套卷练习" left-text="" :left-arrow='true'
     @click-left="onClickLeft"
   >
  <template #right>
    <van-icon name="search" size="20" />
  </template>
</van-nav-bar>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  data() {
    return {

    };
  },
  methods: {
    onClickLeft(){
      this.$router.push('/practice')
    }
  },
};
</script>
<style lang="scss" scoped>
#tjlx_top {
  /deep/.van-ellipsis {
    font-size: 4.8vw;
  }
}
</style>
