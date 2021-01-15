<template>
  <div id="tjlx_tab">
      <van-dropdown-menu>

  <van-dropdown-item title="套卷分类" ref="item" class="tjlx_left">
    <van-cell>
      <template #right-icon>
        <div class="wrapper">
            <div class="left">
                <van-sidebar v-model="activeKey">
                  <van-sidebar-item title="全部" />
                  <van-sidebar-item title="中考真题" />
                  <van-sidebar-item title="化学" />
                  <van-sidebar-item title="英语" />
                </van-sidebar>
            </div>
            <div class="right">
                1
            </div>
        </div>
      </template>
    </van-cell>
  </van-dropdown-item>
    <van-dropdown-item v-model="value" :options="option" title="套卷状态"/>
</van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant'
import { Sidebar, SidebarItem } from 'vant';
export default {
  data() {
    return {
    activeKey:0,
    value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部', value: 0 },
        { text: '已做', value: 1 },
        { text: '未做', value: 2 },
      ],
    };
  },
  methods: {
     onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>
<style lang="scss" scoped>
#tjlx_tab {
     .tjlx_left{
          /deep/.van-cell{
        padding: 0;
        .wrapper{
            display: flex;
        .left{
           width: 35vw;
           .van-sidebar{
               width: 100%;
           }
        }
        .right{
           width: 65vw;
            
        }
        }
    }
     }

}
</style>
