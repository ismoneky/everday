<template>
  <div id="ct_tab">
    <div class="wrapper">
      <div class="left">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" title="类型不限"/>
        </van-dropdown-menu>
      </div>
      <div class="right">
        <div class="gg">
          <van-icon name="notes-o" />
          <span>巩固错题</span>
        </div>
        <div class="yc">
          <van-icon name="todo-list-o" />
          <span>移除错题</span>
        </div>
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
        { text: "全部", value: 0 },
        { text: "考卷练习", value: 1 },
        { text: "考点专练", value: 2 },
        { text: "仿真模考", value: 3 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#ct_tab {
  width: 100%;
  .wrapper {
    width: 100%;
    display: flex;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    .left {
      width: 33.33%;
      /deep/.van-dropdown-menu__bar {
        box-shadow: none;
      }
    }
    .right {
      width: 66.66%;
      font-size: 0.26rem;
      display: flex;
      text-align: center;
      line-height: 0.9rem;
      background-color: white;
      .gg {
        flex: 1;
      }
      .yc {
        flex: 1;
      }
    }
  }
}
</style>