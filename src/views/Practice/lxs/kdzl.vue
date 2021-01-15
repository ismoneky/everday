<template>
  <div id="kdzl">
     <kdzl_top/>
     <kdzl_ss/>
     <kdzl_fl/>
     
  </div>
</template>
<script>
import kdzl_top from '../../../components/kdzl/top'
import kdzl_ss from '../../../components/kdzl/ss'
import kdzl_fl from '../../../components/kdzl/fl'
export default {
    data() {
        return {
            
        }
    },
    components:{
       kdzl_top,
       kdzl_ss,
       kdzl_fl,
    }
}
</script>
<style lang="scss" scoped>
    #kdzl{
        height: 100%;
        width: 100%;
        background-color: white;
    }
</style>