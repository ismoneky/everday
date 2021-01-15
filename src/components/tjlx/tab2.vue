<template>
  <div id="tjlx_tab">
<van-dropdown-menu>
         <van-dropdown-item v-model="value" :options="option1" title="考试类型"/>
      <van-dropdown-item v-model="value" :options="option2" title="考试状态"/>
    <van-dropdown-item v-model="value" :options="option3" title="参考状态"/>

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
     option1: [
        { text: '全部', value: 0 },
        { text: '模拟考试', value: 1 },
        { text: '真实考试', value: 2 },
      ],
       option2: [
        { text: '全部', value: 0 },
        { text: '未开始', value: 1 },
        { text: '进行中', value: 2 },
        { text: '已结束', value: 3 },
      ],
      option3: [
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
