<template>
  <div class="home-page">
    <!-- 轮播组件 -->
    <swiper></swiper>
    <!-- 种类组件 -->
    <kinds></kinds>
    <!-- 标题组件 -->
    <titles title="名师阵容"></titles>
    <!-- 讲师组件 -->
    <teacher></teacher>
    <!-- 标题组件 -->
    <titles title="精品课程"></titles>
    <!-- 课程组件 -->
    <course></course>
    <!-- 标题组件 -->
    <titles title="推荐课程"></titles>
    <!-- 课程组件 -->
    <course></course>
    <!-- 标题组件 -->
    <titles title="明星讲师"></titles>
    <!-- 讲师组件 -->
    <teacher></teacher>
  </div>
</template>
<script>
import swiper from "../../components/home/swiper";
import kinds from "../../components/home/kinds";
import teacher from "@/components/home/teacher";
import titles from "../../components/home/title";
import course from "@/components/home/course";
export default {
  components: {
    swiper,
    kinds,
    teacher,
    titles,
    course,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  overflow-x: hidden;
}
</style>
