<template>
  <div class="teacher">
    <ul>
      <li>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
          alt=""
        />
        <div class="right">
          <h3>杨德胜</h3>
          <div class="text">
            杨老师，特级教师，多次被中国高数学会评为全国高级教师
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.teacher {
  width: 100%;
  font-size: 0.24rem;
  margin: 0 auto;
  //   background: #f0f2f5;
  ul {
    width: 90%;
    margin: 0 auto;
    li {
      height: 1.62rem;
      display: flex;
      align-items: center;
      background: #fff;
      padding: 0 0.2rem;
      border-radius: .1rem;
      img {
        width: 0.79rem;
        height: 0.79rem;
        border-radius: 0.38rem;
      }
      .right {
        height: 100%;
        margin-left: 0.2rem;
        padding: .2rem 0;
        width: calc(100% - 0.9rem);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        h3 {
          color: #595959;
          height: 0.3rem;
          font-size: 0.32rem;
        }
        .text {
          width: 100%;
          color: #b7b7b7;
          overflow: hidden; //多出部分隐藏
          white-space: nowrap; //一行显示 nowrap不换行
          text-overflow: ellipsis; //是否显示省略号
        }
      }
    }
  }
}
</style>
