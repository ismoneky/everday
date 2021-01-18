<template>
    <div id="cp_tab">
        <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" title="类型不限" />
  <van-dropdown-item v-model="value2" :options="option2" title="时间" />
</van-dropdown-menu>
    </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from 'vant';
export default {
    data() {
        return {
                  value1: 0,
      value2: 'a',
      option1: [
        { text: '全部', value: 0 },
        { text: '套卷练习', value: 1 },
        { text: '仿真模考', value: 2 },
        { text: '考点专练', value: 3 },
      ],
      option2: [
        { text: '全部', value: 'a' },
        { text: '今天', value: 'b' },
        { text: '7天', value: 'c' },
      ],
        }
    },
}
</script>