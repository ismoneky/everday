<template>
  <div class="changename">
      <top-nav title="修改名称">
       <span class="sure" @click="save">保存</span>
      </top-nav>
      <div class="content">
        <div class="txt">
          <input type="text" v-model="obj.nickname">
        </div>
      </div>
 </div> 
</template>

<script>
import topNav from '@/components/topNav'
import {getuserinfo} from '../../utils/api'
import server from '../../utils/server/http'
export default {
  components: { topNav },
  name: 'changename',
  data() { 
    return {
      obj:{
        nickname:''
      }
    }
  },
  created() {

  },
  computed:{
  },
  methods:{
    async save(){
      let {data} = await getuserinfo(this.obj)
      this.$router.back()
    }
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
.sure{
  color: blue;
  font-size: 0.28rem;
}
</style>