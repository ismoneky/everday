<template>
  <div class="refresh">
    <div class="rp-empty">
      <img src="@/assets/img/refersh.png" alt="" />
      <p>请登录后查看相关内容</p>
      <button @click="gotologin">登录/注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    gotologin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.refresh {
  width: 100%;
  //   height: calc(100% - 1.6rem);
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
</style>
