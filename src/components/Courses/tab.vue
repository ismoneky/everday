<template>
  <div id="kc_tab">
    <van-dropdown-menu active-color=" rgb(255, 95, 32)">
      <van-dropdown-item title="分类" ref="item">
        <div >
          <van-cell>
            <template #right-icon>
              <van-button type="primary" block class="cz" @click="cz">重置</van-button>

              <van-button type="primary" block class="qd">确定</van-button>
            </template>
          </van-cell>
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value" :options="option" title="排序" @change="getnum(value)" />

      <van-dropdown-item title="筛选" ref="item">
        <div >
          <van-cell>
            <template #right-icon>
              <div class="wrapper">
                <div class="types">
                  <span v-for="(item,i) in lists" :key="i" @click="getname(item.name)">{{item.name}}</span>
                </div>
              </div>
            </template>
          </van-cell>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
import { Button } from "vant";
import { getlists ,gets} from '../../utils/api/index'
export default {
  data() {
    return {
      lists:[],
      value: 0,
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      obj:{
      page:1,
      num:'',
      sx:''
    }
    };
    
  },
  mounted() {
    getlists().then(res=>{
      this.lists=res.data.data.appCourseType
    })
  },
  methods: {
    cz(){//重置选项
      this.$store.commit('teachers/getcz')
    },
    getnum(value){//排序
    this.obj.num=value
      gets(this.obj).then(res=>{
      this.$store.commit('teachers/gettypes',res.data.data.list)
      })
    },

    getname(item){//筛选
    // console.log(item);
      this.obj.sx=item
     gets(this.obj).then(res=>{
      this.$store.commit('teachers/gettypes',res.data.data.list)
      })
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>
<style lang="scss" scoped>
#kc_tab {
  /deep/.van-dropdown-menu__bar {
    box-shadow: none;
  }
  /deep/.van-dropdown-menu__title {
    font-size: 4vw;
  }
  /deep/.van-dropdown-menu__title::after {
    //  margin-top: -4px;
    // border: 3px solid;
    border-color: transparent transparent rgb(58, 58, 58) rgb(58, 58, 58);
  }

  /deep/.van-cell__title,
  .van-cell__value {
    text-align: center;
  }
  /deep/.van-cell__value {
    display: none;
  }
  /deep/.qd {
    margin-left: 2vw;
    height: 8vw;
    border: 1px solid rgb(255, 95, 32);
    background-color: rgb(255, 95, 32);
    border-radius: 5px;
  }
  /deep/.cz {
    height: 8vw;
    border-radius: 5px;
    margin-left: 2vw;

    color: black;
    border: 1px solid rgb(146, 146, 146);
    background-color: rgb(255, 255, 255);
  }
  .van-cell{
    border-top: 1px solid #ebedf0;
  }
  .wrapper {
      padding: 0.3rem 0;
    .types {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      span {
        margin: 0 6.13333vw 1.86667vw 0;
        display: inline-block;
        width: 16vw;
        background: #f5f5f5;
        border-radius: 0.08rem;
        border-radius: 0.8vw;
        font-size: 0.34667rem;
        font-size: 3.46667vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #646464;
        text-align: center;
        line-height: 0.88rem;
        line-height: 8.8vw;
        overflow: hidden;
        &:hover {
          color: #e60012;
          background: #ebeefe;
        }
      }
    }
  }
}
</style>