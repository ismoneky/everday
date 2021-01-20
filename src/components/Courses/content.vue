<template>
  <div id="top_cont">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      v-if="$store.state.teachers.flag"
    >
      <div
        class="Cards"
        v-for="(item, i) in $store.state.teachers.list"
        :key="i"
        @click="getid(item)"
      >
        <img :src="item.cover_img" />
        <div class="right">
          <p class="tit">
            <span>{{ item.title }}</span>
          </p>
          <img src="222.png" alt="" class="img" v-show="item.has_buy===1?true:false">
          <p class="cont">
            <span>3人已报名</span>
            <span class="right2"> 免费 </span>
          </p>
        </div>
      </div>
    </van-list>


        <div
        class="Cards"
        v-for="(item, i) in $store.state.teachers.list"
        :key="i"
        v-else
         @click="getid(item)"
      >
        <img :src="item.cover_img" />
        <div class="right">
          <p class="tit">
            <span>{{ item.title }}</span>
          </p>
          <p class="cont">
            <span>3人已报名</span>
            <span class="right2"> 免费 </span>
          </p>
        </div>
      </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import { getTeachers, gets } from "../../utils/api/index";
import { List } from "vant";
export default {
  data() {
    return {
      obj: {
        page: 1,
        num: "",
        sx: "全部",
      },
      loading: false,
      finished: false,
    };
  },
  methods: {
    getid(item){
      console.log(item);
      this.$router.push({
        path:'/courseDetail',
        query:{
          id:item.id
        }
      })
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.obj.page=2
        gets(this.obj).then((res) => {
          console.log(this.obj);
          console.log(res.data.data.list);
          this.$store.commit("teachers/getpush", res.data.data.list);
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.$store.state.teachers.list.length >= 20) {
            this.finished = true;
          }
        });
      }, 1000);
    },
  },
  destroyed() {
      this.$store.commit('teachers/getcz')
  },
  mounted() {
  },
  created() {
    // gets(this.obj).then((res) => {
    //   this.$store.commit("teachers/gettypes", res.data.data.list);
    // });
      if(this.$store.state.teachers.flag==true){
         gets(this.obj).then((res) => {
      this.$store.commit("teachers/gettypes", res.data.data.list);
    });
      }else{
        console.log(this.$route.query.list);
      this.$store.commit("teachers/gettypes", this.$route.query.list)
      }
  },
 
};
</script>
<style lang="scss" scoped>
#top_cont {
  width: 100%;
  padding: 0.3rem;
  // background-color: red;
  .Cards {
    position: relative;
    background: #fff;
    border-radius: 0.26667rem;
    border-radius: 2.66667vw;
    padding: 0.4rem 0.26667rem;
    padding: 4vw 2.66667vw;
    margin-bottom: 0.4rem;
    margin-bottom: 4vw;
    display: flex;
    position: relative;
    .img{
      position: absolute;
      width: 22vw;
      top: 0.1rem;
      right: -0.2rem;
    }
    img {
      flex: none;
      width: 3.09333rem;
      width: 30.93333vw;
      height: 1.81333rem;
      height: 18.13333vw;
      margin-right: 0.26667rem;
      margin-right: 2.66667vw;
      border-radius: 2.66667vw;
    }
    .right {
      display: flex;
      width: 5.33333rem;
      width: 53.33333vw;
      height: 1.81333rem;
      height: 18.13333vw;
      flex-direction: column;
      justify-content: space-between;
      .tit {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 0.48rem;
        line-height: 4.8vw;
        margin-top: -0.05333rem;
        margin-top: -0.53333vw;
        span {
          font-size: 0.37333rem;
          font-size: 3.73333vw;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #20242a;
        }
      }
      .cont {
        display: flex;
        font-size: 0.32rem;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        align-items: flex-end;
        span {
          flex: 1;
          color: rgba(0, 0, 0, 0.45);
        }
        .right2 {
          text-align: right;
          color: #44a426;
          font-size: 0.4rem;
          font-size: 4vw;
        }
      }
    }
  }
}
</style>