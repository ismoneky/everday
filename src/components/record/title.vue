<template>
  <div class="title">
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
  border-bottom: 0.5px solid gray;
  p {
    font-size: 0.3rem;
  }
}
</style>
