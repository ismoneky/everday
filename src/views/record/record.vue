<template>
  <div class="record">
    <!-- 标题组件 -->
    <titles title="约课记录"></titles>
    <van-tabs v-model="active" line-width=".4rem" @click="changTab">
      <van-tab
        v-for="(item, index) in tab"
        :key="index"
        :name="item.id"
        :title="item.title"
      ></van-tab>
    </van-tabs>
    <div class="refresh">
      <div class="rp-empty">
        <img src="@/assets/img/refersh.png" alt="" />
        <p>{{ txt }}</p>
        <button @click="gotologin">登录/注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import titles from "../../components/record/title";
export default {
  components: {
    titles,
  },
  data() {
    return {
      tab: [
        { title: "待上课", id: 1 },
        { title: "已上课", id: 2 },
        { title: "已取消", id: 3 },
      ],
      active: 0,
      tabIndex: 1,
      txt: "",
    };
  },
  mounted() {
    this.fn();
  },
  methods: {
    // tab选项卡
    changTab(val) {
      console.log(val);
      this.tabIndex = val;
      this.fn();
    },
    fn() {
      if (localStorage.getItem("token")) {
        if (this.tabIndex === 1) {
          this.txt = "还没有待上课记录";
        } else if (this.tabIndex === 2) {
          this.txt = "还没有已上课记录";
        } else if (this.tabIndex === 3) {
          this.txt = "还没有已取消上课记录";
        }
      } else {
        this.txt = "请登录后查看相关信息";
      }
    },
    // 去登陆
    gotologin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.record {
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  /deep/.van-tabs--line .van-tabs__wrap {
    height: 0.8rem;
  }
  /deep/.van-tab {
    font-size: 0.3rem;
    height: 0.8rem;
  }

  .refresh {
    width: 100%;
    //   height: calc(100% - 1.6rem);
    background: #f0f2f5;
    overflow: hidden;
    .rp-empty {
      text-align: center;
      margin-top: 2rem;
      p {
        color: #b7b7bd;
        margin: 0.2rem 0;
        font-size: 0.3rem;
      }
      button {
        border: navajowhite;
        background: #eb6100;
        margin: 0.2rem 0;
        padding: 0.1rem 0.2rem;
        color: #fff;
      }
    }
  }
}
</style>
