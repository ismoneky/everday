<template>
  <div id="ctjl">
      <ct_top/>
      <ct_tab/>
      <ct_cont/>
  </div>
</template>
<script>
import ct_top from '../../../components/ctjl/top'
import ct_tab from '../../../components/ctjl/tab'
import ct_cont from '../../../components/ctjl/content'
export default {
    data() {
        return {
            
        }
    },
    components:{
      ct_top,
      ct_tab,
      ct_cont,
    }
}
</script>
<style lang="scss" scoped>
    #ctjl{
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>