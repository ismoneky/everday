<template>
  <div class="hotDetail">
    <div class="img">
      <img :src="list.thumb_img" alt="" />
    </div>
    <div class="title">
      <div>{{ list.title }}</div>
    </div>
    <div class="yulan">
      <div class="left">{{ list.click_rate }}次预览</div>
      <div class="right">{{ list.created_at | filtime }}</div>
    </div>
    <div class="description">
      <div>{{ list.description }}</div>
    </div>
    <div class="content" v-html="list.content"></div>
  </div>
</template>
<script>
import { getHotDetail } from "../../utils/api";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    getHotDetail(this.$route.query.id).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {},
  filters: {
    filtime(val) {
      var time = new Date(val * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      return `${month.toString().padStart(2, 0)}-${day
        .toString()
        .padStart(2, 0)}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.hotDetail {
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  background: #fff;
  overflow:auto;
  .img {
    width: 100%;
    height: 4.23rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    padding: 0.2rem 0 0 0.2rem;
    div {
      font-size: 0.4rem;
    }
  }
  .yulan {
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    color: gray;
  }
  .description {
    padding: 0 0.6rem;
    div {
      line-height: 0.5rem;
      font-size: .3rem;
      color: gray;
    }
  }
  .content{
      padding: .4rem .4rem 0 .4rem;
      font-size: .3rem;
  }
}
</style>
