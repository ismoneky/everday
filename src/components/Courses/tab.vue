<template>
  <div id="kc_tab">
      <van-dropdown-menu active-color="orange">
          <van-dropdown-item title="分类" ref="item">
    <div style="padding: 5px 16px;">
      <van-button type="danger" block round @click="onConfirm">
        确认
      </van-button>
    </div>
  </van-dropdown-item>
  <van-dropdown-item v-model="value" :options="option" title="排序"/>
  <van-dropdown-item title="筛选" ref="item">

   
    <div style="padding: 5px 16px;">
      <van-button type="danger" block round @click="onConfirm">
        确认
      </van-button>
    </div>
  </van-dropdown-item>
</van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant';
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
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
   #kc_tab{
       /deep/.van-dropdown-menu__bar{
           box-shadow:none
       }
       /deep/.van-dropdown-menu__title{
           font-size: 4vw;
       }
       /deep/.van-dropdown-menu__title::after{
               margin-top: -7px;
                border: 4px solid;
                border-color: transparent transparent rgb(58, 58, 58) rgb(58, 58, 58);
       }
      
   }
</style>