<template>
  <div id="ss">
    <div class="top">
      <div class="one" @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div class="two">
        <input type="text" placeholder="请输入内容" />
      </div>
      <div class="three">取消</div>
    </div>
    <div class="wrap">
      <p>历史搜索</p>
      <span>
        <van-icon name="delete" />
      </span>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  data() {
    return {};
  },
  methods: {
      goback(){
          this.$router.go(-1)
      }
  },
};
</script>
<style lang="scss" scoped>
#ss {
  width: 100%;
  height: 100%;
  background-color: white;
  .top {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-around;
    .one {
      // flex: 1;
      font-size: 0.4rem;
    }
    .two {
      line-height: 0.5rem;
      input {
        width: 5rem;
        height: 0.7rem;
        background-color: #eaeaea;
        border: none;
        border-radius: 50px;
        font-size: 0.3rem;
        padding-left: 0.56rem;
      }
    }
    .three {
      // flex: 1;
      font-size: 0.23rem;
      color: #dadada;
    }
  }
  .wrap {
    width: 6.82rem;
    height: 1.04rem;
    line-height: 1.04rem;
    margin: .24rem;
    display: flex;
    justify-content: space-between;
    p {
    height: 100%;
    margin: 0;
    font-size: .3rem;
    color: #333;
    font-weight: 700;
    }
    span {
          font-size: 0.4rem;
          line-height: 1.2rem;
    }
  }
}
</style>