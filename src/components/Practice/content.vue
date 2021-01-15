<template>
  <div id="lx_cont">
    <div class="wrapper">
      <p class="kd">近期考点</p>
      <p class="px">
        <span class="px1">默认排序</span> <span class="px2">时间</span>
      </p>
      <div class="xx">
        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="" />
        <p>暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#lx_cont {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  .wrapper {
    width: 100%;
    // height: 4rem;
    padding: 0.3rem 0.2rem;
    background-color: #fff;
    .kd {
      font-size: 4vw;
      color: #8c8c8c;
      margin-bottom: 3.86667vw;
    }
    .px {
      display: flex;
      justify-content: space-between;
      font-size: 0.13rem;
      color: #8c8c8c;

      .px1 {
        color: #eb6100;
      }
      .px2 {
      }
    }
    .xx {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 3.2vw;
      color: #8c8c8c;
      img {
        width: 23.46667vw;
        margin-bottom: 4vw;
        height: 2.3rem;
      }
    }
  }
}
</style>