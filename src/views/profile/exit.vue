<template>
  <div class="exit">
    <top-nav title="设置中心"></top-nav>
    
     <van-cell title="退出登录" is-link  class="cell" @click="exited"/>
 </div>
</template>

<script>
import topNav from '@/components/topNav'
import TopNav from '../../components/topNav.vue'
export default {
  name: 'exit',
  data() { 
    return {
      obj:{}
    }
  },
  created() {

  },
  methods:{
      exited(){
        localStorage.removeItem('token') 
        this.$store.commit('loginStore/setUser',this.obj);
        this.$router.push('/login')
      }
  },
  components:{
      topNav
  }
 }
</script>

<style lang="scss" scoped>
.exit{
    width: 100%;
    height: 100%;
    .exitbtn{
        width: 100%;
        height: 0.8rem;
        background-color: blue;
    }
    .cell{
        margin-top: 0.1rem;
    }
}
</style>