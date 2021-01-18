<template>
  <div class="title border-bottom">
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
  width: 100%;
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  p {
    font-size: 0.3rem;
  }
}
</style>
