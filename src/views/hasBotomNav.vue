<template>
  <div class="hasbottomnav">
      <div class="content">
          <router-view></router-view>
      </div>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '@/components/bottomNav'
import BottomNav from '../components/bottomNav.vue';
export default {
  name: "hasbottomnav",
  data() {
    return {
        active:0
    };
  },
  created() {},
  methods: {},
  components:{
    bottomNav
  }
};
</script>
<style lang="scss" scoped>
.hasbottomnav {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content{
    width: 100%;
    height: calc(100% - 1.2rem );
    overflow: hidden;
    overflow-y: auto;
}
</style>
