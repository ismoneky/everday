<template>
  <div id="ss_ss">
   <div class="wrapper">
       <input type="text" placeholder="请输入题库名称关键字" class="inp">
       <van-icon name="search"  class="ss"/>
   </div>
       

  </div>
</template>
<script>
import { Icon } from 'vant';
export default {
  data() {
    return {};
  },
  methods: {
      
  },
  
};
</script>
<style lang="scss" scoped>
#ss_ss {
 width: 100%;
    padding: 0.2rem;
 background-color: white;
 .wrapper{
     height: 0.7rem;
     line-height: 0.7rem;
     padding-left: 0.2rem;
     background-color: #f7f8fa;
     border-radius: 20px;
     display: flex;
     .inp{
         color: #323233;
        background-color: #f7f8fa;
         flex: 9;
         border: 0;
         height: 0.7rem;
         width: 100%;
         font-size: 0.2rem;
     }
     .ss{
         line-height: 0.7rem;
         font-size: 0.3rem;
         padding-right: 0.2rem;
     }
 }
}
</style>
