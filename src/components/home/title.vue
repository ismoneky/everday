<template>
  <div class="title">
    <p></p>
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.title {
  width: 90%;
  margin: 0 auto;
  height: 1rem;
  display: flex;
  align-items: center;
  p {
    height: 0.4rem;
    line-height: 0.4rem;
  }
  p:nth-child(1) {
    width: 0.1rem;
    background: #eb6100;
  }
  p:nth-child(2) {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
}
</style>
