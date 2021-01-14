<template>
  <div id="kc">
    <kc_top />
    <kc_tab />
    <kc_cont />
  </div>
</template>
<script>
import kc_top from '../../components/Courses/top'
import kc_tab from '../../components/Courses/tab'
import kc_cont from '../../components/Courses/content'
export default {
    data() {
        return {
            
        }
    },
    components:{
        kc_top,
        kc_tab,
        kc_cont,
    }
}
</script>
<style lang="scss" scoped>
    #kc{
        height: 100%;
        width: 100%;
    }
</style>