<template>
  <div id="loading" v-show="show">
    <div class="loadimg">
      <img src="/loading.gif" alt="" />
    </div>
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
  background-color: rgba(0, 0, 0, 0.5);
  .loadimg {
    width: 40%;
    height: 20%;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid red;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
