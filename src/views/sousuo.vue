<template>
  <div id="ss">
    <div class="top">
      <div class="one" @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div class="two">
        <input type="text" placeholder="请输入内容" v-model="val" @keyup.enter ="getval"/>
      </div>
      <div class="three" @click="goback">取消</div>
    </div>
    <div class="wrap">
      <p>历史搜索</p>
      <span>
        <van-icon name="delete" @click="del" />
      </span>
    </div>
    <ul class="cont">
      <li v-for="(item,i) in $store.state.teachers.vals" :key="i">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { Icon } from "vant";
import {getsousuo} from '../utils/api/index'
export default {
  data() {
    return {
      val:''
    };
  },
  methods: {
    getval(){
      getsousuo(this.val).then(res=>{
        this.$router.push({
          path:'/feature',
          query:{
            list:res.data.data.list
          },
        })
        this.$store.commit('teachers/getval',this.val)
        this.val=''
      })
    },
      goback(){
          this.$router.go(-1)
      },
      del(){
        this.$store.commit('teachers/del')
      },
  },
};
</script>
<style lang="scss" scoped>
#ss {
  width: 100%;
  height: 100%;
  background-color: white;
  .top {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-around;
    .one {
      // flex: 1;
      font-size: 0.4rem;
    }
    .two {
      line-height: 0.5rem;
      input {
        width: 5rem;
        height: 0.7rem;
        background-color: #eaeaea;
        border: none;
        border-radius: 50px;
        font-size: 0.3rem;
        padding-left: 0.56rem;
      }
    }
    .three {
      // flex: 1;
      font-size: 0.23rem;
      color: #dadada;
    }
  }
  .wrap {
    width: 6.82rem;
    height: 1.04rem;
    line-height: 1.04rem;
    margin: .24rem;
    display: flex;
    justify-content: space-between;
    p {
    height: 100%;
    margin: 0;
    font-size: .3rem;
    color: #333;
    font-weight: 700;
    }
    span {
          font-size: 0.4rem;
          line-height: 1.2rem;
    }
  }
  .cont{
      width: 100%;
      padding: 0.3rem;
      display: flex;
      flex-wrap: wrap;
      font-size: 0.3rem;

    li{
      border-radius: 5px;
      margin: 0.2rem;
      float: left;
      height: 0.5rem;
      line-height: 0.3rem;
      padding: 0.1rem;
      // width: 1rem;
      text-align: center;
      background-color: rgb(182, 182, 182);
    }
  }
}
</style>