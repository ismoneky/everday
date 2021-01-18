<template>
  <div id="kc_top">
<van-nav-bar title="特色课" left-text="" :left-arrow='false'>
  <template #right>
    <van-icon name="search" size="28" @click="goss" />
  </template>
</van-nav-bar>
  </div>
</template>
<script>
import { NavBar } from 'vant';
export default {
    data() {
        return {
            
        }
    },
    methods: {
          goss(){
      this.$router.push('/ss')
    },
    },
}
</script>
<style lang="scss" scoped>
    #kc_top{
        /deep/.van-ellipsis{
            font-size: 4.8vw;
        }
        .van-nav-bar__right {
            right: 0.02rem;
        }
        .van-nav-bar .van-icon{
            color: black;
        }
    }
</style>