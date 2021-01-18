<template>
  <div id="cp_cont">
    <div class="wrapper">
      <div class="wz">
        <div class="wz_one">
          <h3>物理学史</h3>
          <p>0<span>/8</span></p>
        </div>
        <div class="wz_two">
          <p>答题时长：0分41秒 正确率：0%</p>
          <p>提交时间：2020/10/28 15:16:53</p>
        </div>
        <div class="wz_three">
          <button class="btn" @click="goct">查看解析</button>
          <button class="btn" @click="goct">重新练习</button>
        </div>
      </div>
    </div>
    <p class="p">没有更多了</p>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goct(){
       this.$router.push('/ggct')
    }
  },
};
</script>
<style lang="scss" scoped>
#cp_cont {
  padding: 0.3rem;
  .wrapper {
    border-radius: 10px;
    width: 100%;
    // height: 3rem;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    margin-bottom: 0.2rem;
    .wz {
      padding: 0.5rem;
      //  padding: .2rem;
      .wz_one {
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;
        h3 {
          font-size: 0.28rem;
          color: #303133;
        }
        p {
          font-size: 0.24rem;
          color: #4a70ff;
        }
        span {
          font-size: 0.24rem;
          color: #8c8c8c;
        }
      }
      .wz_two {
        // margin-bottom: 0.2rem;
        color: #8c8c8c;
        p {
          font-size: 3.46667vw;
          line-height: 6.13333vw;
        }
      }
      .wz_three {
        // margin-bottom: 0.2rem;
        text-align: right;
        width: 100%;
        .btn {
          background: none;
          width: 21vw;
          height: 7.46667vw;
          font-size: 0.24rem;
          margin-left: 2.26667vw;
          padding: 0;
          color: #1989fa;
          border: 1px solid #1989fa;
          border-radius: 999px;
        }
      }
    }
  }
  .p {
    font-size: 0.13rem;
    text-align: center;
    color: #969799;
  }
}
</style>