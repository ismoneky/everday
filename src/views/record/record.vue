<template>
  <div class="record">
    <!-- 标题组件 -->
    <titles title="约课记录"></titles>
    <van-tabs v-model="active" line-width=".4rem" @click="changTab">
      <van-tab
        v-for="(item, index) in tab"
        :key="index"
        :name="item.id"
        :title="item.title"
      ></van-tab>
    </van-tabs>
    <refresh></refresh>
  </div>
</template>
<script>
import titles from "../../components/record/title";
import refresh from "@/components/record/refresh";
export default {
  components: {
    titles,
    refresh,
  },
  data() {
    return {
      tab: [
        { title: "待上课", id: 1 },
        { title: "已上课", id: 2 },
        { title: "已取消", id: 3 },
      ],
      active: 0,
    };
  },
  mounted() {},
  methods: {
    changTab(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.record {
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  /deep/.van-tabs--line .van-tabs__wrap {
    height: 0.8rem;
  }
  /deep/.van-tab {
    font-size: 0.3rem;
    height: 0.8rem;
  }
}
</style>
