<template>
  <div id="cpjl">
      <cp_top/>
      <cp_tab/>
      <cp_cont/>
  </div>
</template>
<script>
import cp_top from '../../../components/cpjl/top'
import cp_tab from '../../../components/cpjl/tab'
import cp_cont from '../../../components/cpjl/content'
export default {
    data() {
        return {
            
        }
    },
    components:{
      cp_top,
      cp_tab,
      cp_cont,
    }
}
</script>
<style lang="scss" scoped>
    #cpjl{
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>