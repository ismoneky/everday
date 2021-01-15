<template>
  <div id="kc_tab">
      <van-dropdown-menu active-color=" rgb(255, 95, 32)">
      <van-dropdown-item title="分类" ref="item">
      <van-cell center title="包邮">
      </van-cell>
    <div style="padding: 5px 16px;">  
      <van-cell>
      <template #right-icon>
          <van-button type="primary" block class="cz">重置</van-button>
  
          <van-button type="primary" block class="qd">确定</van-button>
      </template>
    </van-cell>
      
    </div>
  </van-dropdown-item>
  <van-dropdown-item v-model="value" :options="option" title="排序"/>
  
  <van-dropdown-item title="筛选" ref="item">
      <van-cell center title="包邮">
      </van-cell>
    <div style="padding: 5px 16px;">  
      <van-cell>
      <template #right-icon>
          <van-button type="primary" block class="cz">重置</van-button>
  
          <van-button type="primary" block class="qd">确定</van-button>
      </template>
    </van-cell>
      
    </div>
   
  </van-dropdown-item>
</van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant';
import { Button } from 'vant';
export default {
  data() {
    return {
      value: 0,
      option: [
        { text: '综合排序', value: 0 },
        { text: '最新', value: 1 },
        { text: '最热', value: 2 },
        { text: '价格从低到高', value: 3 },
        { text: '价格从高到低', value: 4 },
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
              //  margin-top: -4px;
                // border: 3px solid;
                border-color: transparent transparent rgb(58, 58, 58) rgb(58, 58, 58);
       }

       /deep/.van-cell__title, .van-cell__value{
         text-align: center;
       }
       /deep/.van-cell__value{
         display: none;
       } 
       /deep/.qd{
         margin-left: 2vw;
          height: 8vw;
         border: 1px solid rgb(255, 95, 32);
         background-color: rgb(255, 95, 32);
         border-radius: 5px;
       }
          /deep/.cz{
          height: 8vw;
         border-radius: 5px;
         margin-left: 2vw;

          color: black;
         border: 1px solid rgb(146, 146, 146);
         background-color: rgb(255, 255, 255);
       }
   }
</style>