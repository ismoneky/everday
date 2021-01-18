<template>
  <div id="xt_cont">
    <div class="wrap">
      <p><span>[单选题]</span>关于碳及其氧化物的说法正确的是</p>
      <div>
        <button @click="goct">查看详情</button>
      </div>
    </div>
    <p>没有更多了</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
          goct(){
       this.$router.push('/ggct')
    }
  },
};
</script>
<style lang="scss" scoped>
#xt_cont {
  border-radius: 5px;
  padding: 0.3rem;
  width: 100%;
  .wrap {
      border-radius: 5px;
    padding: 0.3rem;
    box-shadow: 0px 0px 8px 0px rgb(206, 206, 206);
    p {
      text-align: left;
      line-height: 5.33333vw;
      font-size: 0.28rem;
      color: #262626;
      span {
        color: #0097fa;
        padding: 0 0.05333rem;
      }
    }
    div {
      padding: 0.2rem 0;
      display: flex;
      justify-content: flex-end;
      button {
        background: none;
        width: 21vw;
        height: 7.46667vw;
        font-size: 0.24rem;
        margin-left: 2.26667vw;
        padding: 0;
        color: #ff976a;
        border-radius: 999px;
        border: 1px solid #ff976a;
      }
    }
  }
  p {
    text-align: center;
    color: #969799;
    font-size: 3.2vw;
    line-height: 6.66667vw;
  }
}
</style>