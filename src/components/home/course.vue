<template>
  <div class="course">
    <ul>
      <li>
        <font
          >每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题</font
        >
        <div class="li-time">
          <p>共1课时</p>
        </div>
        <div class="li-teacher">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
            alt=""
          />
          <p>杨德胜</p>
        </div>
        <div class="li-info">
          <p>126人已报名</p>
          <p>免费</p>
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
.course {
  width: 100%;
  font-size: 0.24rem;
  ul {
    width: 90%;
    margin: 0 auto;
    li {
      background: #fff;
      padding: 0 0.3rem;
      padding-top: 0.4rem;
      border-radius: 0.1rem;
      font {
        font-size: 0.3rem;
        font-weight: 400;
        color: #333;
      }
      .li-time {
        height: 0.65rem;
        line-height: 0.65rem;
        p {
          color: #666;
        }
      }
      .li-teacher {
        height: 1.6rem;
        display: flex;
        align-items: center;
        img {
          width: 0.56rem;
          border-radius: 0.28rem;
        }
        p {
          margin-left: 0.2rem;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      .li-info {
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 0.5px solid gray;
        :nth-child(1) {
          color: #8c8c8c;
          font-size: 0.3rem;
        }
        :nth-child(2) {
          color: #50a426;
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>
