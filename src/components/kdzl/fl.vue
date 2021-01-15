<template>
  <div id="kdzl_fl">
      <div class="wrapper">
          <div class="left">
            <van-sidebar v-model="activeKey">
                  <van-sidebar-item title="求导题库" />
                  <van-sidebar-item title="极限题库" />
                  <van-sidebar-item title="生物" />
                  <van-sidebar-item title="化学" />
                  <van-sidebar-item title="数学" />
                  <van-sidebar-item title="物理" />
            </van-sidebar>
          </div>
          <div class="right">
              
          </div>
      </div>
  </div>
</template>
<script>
import { Sidebar, SidebarItem } from 'vant';
export default {
  data() {
    return {
         activeKey: 0,
    };
  },
  methods: {
      
  },
  
};
</script>
<style lang="scss" scoped>
    #kdzl_fl{
        width: 100%;
        height: 80vh;
        // background-color: khaki;
        .wrapper{
            width: 100%;
            display: flex;
            .left{
                width: 35%;
                /deep/.van-sidebar{
                    /deep/.van-sidebar-item{
                    padding: 16px 12px;
                    }
                    width: 100%;
                }
            }
            .right{
                width: 65%;
            }
        }
    }
</style>
