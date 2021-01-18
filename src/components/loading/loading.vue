<template>
  <div id="loading" v-show="show">
    <img src="/loading.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    show: Boolean,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    width: 40%;
    height: 15%;
    border-radius: 0.2rem;
  }
}
</style>
