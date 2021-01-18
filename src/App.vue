<template>
  <div id="app">
    <router-view />
    <darg ></darg>
  </div>
</template>
<script>
import darg from "@/components/darg";
export default {
  components: {
    darg,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  position: relative;
}
</style>
