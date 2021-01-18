<template>
  <div id="xt_tab">
    <div class="wrapper">
     <div class="left">
        <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" title="题目类型" />
      </van-dropdown-menu>
     </div>
     <div class="right">

     </div>
      
    </div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "单选", value: 0 },
        { text: "多选", value: 1 },
        { text: "判断", value: 2 },
        { text: "连线", value: 3 },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#xt_tab {
  .wrapper{
      display: flex;
        box-shadow: 0  2px 12px rgba(100,101,102,.12);
      .left{
        flex: 5;
        /deep/.van-dropdown-menu__bar{
        box-shadow:none 
        }
      }
      .right{
          flex: 5;
          background-color: white;
     
      }
     
  }
}
</style>
