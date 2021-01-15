<template>
  <div class="courseTitle border-bottom">
    <div><van-icon name="arrow-left" @click="back" /></div>
    <div>{{ title }}</div>
    <div><van-icon name="cluster-o" /></div>
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
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  background: #fff;
}
</style>
