<template>
  <div class="bottomnav">
    <van-tabbar v-model="active" router active-color='rgb(241, 89, 0)' inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/feature">课程</van-tabbar-item>
      <van-tabbar-item icon="records" to="/record">约课记录</van-tabbar-item>
      <van-tabbar-item icon="edit" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/myprofile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "",
  data() {
    return {
      active: 0,
     
    };
  },
  created() {},
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
.bottomnav {
  width: 100%;
  background-color: white;
}

</style>
