<template>
  <div class="balance">
    <top-nav title="我的余额"></top-nav>
    <div class="content">
      <div class="cont-balance">账户余额： <span>5.01 &nbsp;学习币</span></div>
      <div class="cont-check">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <section>
              <img src="/money.jpg" />
              <span>{{ item.count }}</span>
            </section>
            <section>
              ￥<span>{{ item.money }}</span>
            </section>
          </li>
        </ul>
      </div>
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
  height: 1.2rem;
  background: white;
  font-size: 0.28rem;
  span {
    color: rgb(112, 112, 255);
  }
}
.cont-check {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    li{
        width: 100%;
        height: 0.8rem;
        background: white;
    }
  }
}
</style>
