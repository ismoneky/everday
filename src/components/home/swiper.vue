<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.banner_img" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { getbanner } from "../../utils/api";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    // getbanner().then((res) => {
    //   // console.log(res);
    //   this.list = res.data;
    //   // console.log(this.list);
    // });
    this.fn();
  },
  methods: {
    async fn() {
      let { data } = await getbanner();
      console.log(data);
      if (data.code === 200) {
        this.list = data.data;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.van-swipe-item {
  img {
    width: 100%;
    height: 3.49rem;
  }
}
</style>
