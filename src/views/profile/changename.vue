<template>
  <div class="changename">
      <top-nav title="修改名称"></top-nav>
      <div class="content">
        <div class="txt">
          <input type="text">
        </div>
      </div>
 </div> 
</template>

<script>
import topNav from '@/components/topNav'
export default {
  components: { topNav },
  name: 'changename',
  data() { 
    return {

    }
  },
  created() {

  },
  methods:{

  },
 }
</script>

<style lang="scss" scoped>
.changename{
  width: 100%;
  height: 100%;
}
.content{
  width: 100%;
  height: calc(100% - 0.8rem);
  .txt{
    width: 100%;
    height: 1rem;
    margin-top: 0.2rem;
    background: white;
    overflow: hidden;
    font-size: 0.34rem;
    input{
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
    }
  }
}
</style>