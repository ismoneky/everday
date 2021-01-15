<template>
  <div class="myclass">
    <top-nav title="我的课程"></top-nav>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="标签1">内容 1</van-tab>
        <van-tab title="标签2">内容 2</van-tab>
        <van-tab title="标签3">内容 3</van-tab>
        <van-tab title="标签4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav";
export default {
  components: { topNav },
  name: "myclass",
  data() {
    return {
        active:'0'
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.myclass {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: calc(100% - 0.8rem);
    padding-top: 0.2rem;
  }
}
</style>
