<template>
  <div id="cp_top">
   <van-nav-bar title="测评记录" left-text="" :left-arrow='true'
     @click-left="onClickLeft"
   >
  <template #right>
    <van-icon name="search" size="20" @click="goss" />
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
        goss(){
      this.$router.push('/ss')
    },
    onClickLeft(){
      this.$router.push('/practice')
    }
  },
};
</script>
<style lang="scss" scoped>
#cp_top {
  /deep/.van-ellipsis {
    font-size: 4.8vw;
  }
}
</style>
