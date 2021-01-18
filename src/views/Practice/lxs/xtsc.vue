<template>
    <div id="xtsc">
        <xt_top/>
        <xt_tab/>
        <xt_cont/>
    </div>
</template>
<script>
import xt_top from '../../../components/xtsc/top'
import xt_tab from '../../../components/xtsc/tab'
import xt_cont from '../../../components/xtsc/content'
export default {
    data() {
        return {
            
        }
    },
    components:{
        xt_top,
        xt_tab,
        xt_cont,
    }
}
</script>
<style lang="scss" scoped>
    #xtsc{
        width: 100%;
        height: 100%;
        background: white;
    }
</style>