<template>
  <div id="kdzl">
     <tjlx_top/>
     <tjlx_tab/>
     <tjlx_cont/>
  </div>
</template>
<script>
import tjlx_top from '../../../components/tjlx/top'
import tjlx_tab from '../../../components/tjlx/tab2'
import tjlx_cont from '../../../components/tjlx/content'

export default {
    data() {
        return {
            
        }
    },
    components:{
       tjlx_top,
       tjlx_tab,
       tjlx_cont,
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