<template>
  <div class="topnav">
    <span @click="back">
      <van-icon name="arrow-left" />
    </span>
    <span>
      {{ title }}
    </span>
    <span>
      <slot>
        
      </slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "topnav",
  props: ["title"],
  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  width: 100%;
  height: 0.8rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  font-size: 0.32rem;
}
</style>
