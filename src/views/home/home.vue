<template>
  <div class="home-page">
    <!-- 轮播组件 -->
    <swiper></swiper>
    <!-- 种类组件 -->
    <kinds></kinds>
    <!-- 讲师组件 -->
    <teacher></teacher>
    <!-- 弹窗 -->
    <div class="lialing" v-show="$store.state.teaShow">
      <div class="lialing_li">
        <div class="title">
          <div class="title_cha" @click="yingcang">×</div>
          <div class="title_top">
            <div></div>
            <div>赶紧登陆一下吧</div>
            <div></div>
          </div>
          <div class="title_bottom">立即预约一对一辅导，浏览更多视频教程</div>
        </div>
        <div class="login" @click="gotologin">立即登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHome } from "../../utils/api";
import swiper from "../../components/home/swiper";
import kinds from "../../components/home/kinds";
import teacher from "@/components/home/teacher";

export default {
  components: {
    swiper,
    kinds,
    teacher,
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list: [],
      obj: {
        name: "小黑",
      },
    };
  },
  created() {
    this.yingcang();
console.log(this);

  },
  methods: {
    // async fn() {
    //   let { data } = await getHome();
    //   console.log(data);
    //   this.list = data;
    // },
    yingcang() {
      let show = "false";
      this.$store.commit("teashow", show);
    },
    gotologin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  // background: #f0f2f5;
  overflow: auto;
}
.lialing {
  width: 100%;
  height: calc(100% - 1.2rem);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  .lialing_li {
    font-size: 0.24rem;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 4rem;
    height: 4.6rem;
    margin: auto;
    z-index: 19;
    background: #fff;
    padding-top: 0.2rem;
    border-radius: 0.3rem;
    .title {
      .title_cha {
        display: flex;
        justify-content: flex-end;
        padding-right: 0.2rem;
      }
      .title_top {
        height: 0.4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        align-items: center;
        font-size: 0.28rem;
        div:nth-child(3) {
          color: gray;
        }
      }
      .title_bottom {
        font-size: 0.2rem;
        color: gray;
      }
    }
    .login {
      width: 3.6rem;
      height: 0.6rem;
      margin: 0.6rem auto;
      background: orangered;
      line-height: 0.6rem;
      color: white;
      border-radius: 0.3rem;
    }
  }
}
</style>
