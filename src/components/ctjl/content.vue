<template>
  <div id="ct_cont">
    <div class="wrapper">
      <div class="wz">
        <div class="wz_one">
          <p>物理学史</p>
          <span>7道错题</span>
        </div>
        <div class="wz_two">
          <p>提交时间：2020/10/28 15:16:53</p>
        </div>
        <div class="wz_three">
          <button class="btn" @click="goct">巩固错题</button>
        </div>
      </div>
    </div>
    <p class="p">没有更多了</p>
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
#ct_cont {
  width: 100%;
  padding: 0.2rem;
  .wrapper {
    border-radius: 10px;
    width: 100%;
    height: 3rem;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    margin-bottom: 0.2rem;
    .wz {
            padding: .5rem;
            //  padding: .2rem;
        .wz_one{
                margin-bottom: .2rem;
                display: flex;
    justify-content: space-between;
          p{
        font-size: 0.28rem;
            color: #303133;
          }
          span{
                  font-size: .24rem;
                color: #4a70ff;
          }
        }
        .wz_two{
                margin-bottom: .2rem;
                font-size: .22rem;
    color: #8c8c8c;
        }
      .wz_three {
              margin-bottom: .2rem;
        text-align: right;
        width: 100%;
        .btn {
          height: 32px;
          padding: 0 8px;
          font-size: 12px;
          border-radius: 999px;
          border: 1px solid #ebedf0;
          color: rgb(114, 50, 221);
          border-color: rgb(114, 50, 221);
          background-color: #fff;
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