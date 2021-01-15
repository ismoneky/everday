<template>
  <div id="lx">
      <lx_top/>
      <lx_tab/>
      <lx_cont/>
  </div>
</template>
<script>
import lx_top from '../../components/Practice/top'
import lx_tab from '../../components/Practice/tab'
import lx_cont from '../../components/Practice/content'
export default {
    data() {
        return {
            
        }
    },
    components:{
       lx_top,
       lx_tab,
       lx_cont,
    }
}
</script>
<style lang="scss" scoped>
    #lx{
        height: 100%;
        width: 100%;
    }
</style>