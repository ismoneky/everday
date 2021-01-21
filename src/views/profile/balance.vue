<template>
  <div class="balance">
    <top-nav title="我的余额" class="border-bottom"></top-nav>
    <div class="content">
      <div class="cont-balance">账户余额： <span>5.01 &nbsp;学习币</span></div>
      <div class="cont-check">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <section class="li-left">
              <img src="/imgs/money.jpg" />
              <span>{{ item.count }}</span
              >学习币
            </section>
            <section class="li-right">
              ￥<span>{{ item.money }}</span>
            </section>
          </li>
        </ul>
      </div>

      <div class="text">
        <h2 class="border-bottom">充值中心</h2>
        <section>
          <p>
            1.学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、电子书
          </p>
          <p>2.充值后没有使用期限，但无法提现，退款和转赠他人。</p>
          <p>3.如果遇到无法充值，充值失败等问题，请联系客服</p>
        </section>
        <div class="text-xieyi">
          <input type="checkbox" name="" id="" />
          阅读并同意
          <a href="#">充值服务协议</a>
        </div>
      </div>
    </div>
    <div class="btndiv">
      立即充值
    </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav";
export default {
  components: { topNav },
  name: "balance",
  data() {
    return {
      list: [
        {
          count: 6,
          money: "6.00",
        },
        {
          count: 12,
          money: "30.00",
        },
        {
          count: 30,
          money: "30.00",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.balance {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 0.8rem);
}
.cont-balance {
  width: 100%;
  height: 1rem;
  background: white;
  line-height: 1rem;
  font-size: 0.28rem;
  span {
    color: rgb(112, 112, 255);
  }
}
.cont-check {
  width: 100%;
  height: 4.2rem;
  padding: 0.2rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    li {
      width: 100%;
      height: 1.3rem;
      background: white;
      border-radius: 0.2rem;
      border: 1px solid rgba(202, 202, 202, 0.6);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
      font-size: 0.32rem;
      padding: 0 0.4rem;
      .li-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #666;
        img {
          width: 0.3rem;
          height: 0.4rem;
          margin-right: 0.1rem;
        }
      }
      .li-right {
        color: orangered;
        font-weight: 600;
        span {
          font-size: 0.43rem;
        }
      }
    }
    li:hover {
      border: 1px solid orangered;
      box-shadow: 0.001rem 0.001rem 0.1rem 0.001rem orangered;
      background: #feede3;
    }
  }
}
.text {
  width: 100%;
  height: 8rem;
  background: white;
  padding: 0.2rem;
  h2 {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.34rem;
  }
  section {
    margin: 0.2rem 0;
    color: #ccc;
    font-size: 0.26rem;
    p {
      line-height: 0.38rem;
    }
  }
}
.text-xieyi {
  width: 100%;
  height: 0.6rem;
  font-size: 0.28rem;
  display: flex;
  align-items: center;
  input {
    margin-right: 0.1rem;
  }
  a {
    margin-left: 0.2rem;
  }
}
.btndiv {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: orangered;
  color: white;
  font-size: 0.32rem;
  text-align: center;
  line-height: 1rem;
}
</style>
