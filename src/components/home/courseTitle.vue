<template>
  <div class="courseTitle">
    <header>
      <div><van-icon name="arrow-left" @click="back" /></div>
      <div>{{ title }}</div>
      <div></div>
    </header>
    <div class="bottom"></div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  props: ["title"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.courseTitle {
  height: 2rem;
  background: skyblue;
  header {
    width: 100%;
    height: .8rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
  }
}
</style>
