<template>
  <div class="record">
    <!-- 标题组件 -->
    <titles title="约课记录"></titles>
    <div class="tab">
      <ul>
        <li
          v-for="(item, index) in tab"
          :key="index"
          @click="tabIndex = index"
          :class="tabIndex === index ? 'orange' : ''"
        >
          <p>{{ item.title }}</p>
          <i :class="tabIndex === index ? 'i' : ''"></i>
        </li>
      </ul>
    </div>
    <div class="refresh">
      <div class="rp-empty">
        <img src="@/assets/img/refersh.png" alt="" />
        <p>请登录后查看相关内容</p>
        <button>登录/注册</button>
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
      tab: [{ title: "待上课" }, { title: "已上课" }, { title: "已取消" }],
      tabIndex: 0,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.record {
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  .tab {
    width: 100%;
    height: 0.8rem;
    ul {
      width: 100%;
      height: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 0.3rem;
      li {
        text-align: 100%;
        line-height: 0.8rem;
        text-align: center;
        position: relative;
        .i {
          //   width: 0.2rem;
          //   height: 0.1rem;
          display: inline-block;
          //   background: orange;
          position: absolute;
          width: 10px;
          height: 2px;
          bottom: 0px;
          border-bottom: 1px solid #f07a00;
        }
      }
      .orange{
          color: #f07a00;
      }
    }
  }
  .refresh {
    width: 100%;
    height: calc(100% - 1.6rem);
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
