<template>
  <div class="teaDetail">
    <!-- tit;e -->
    <div class="title">
      <div class="title_left">
        <img :src="list.avatar" />
        <span>{{ list.real_name }}</span>
      </div>
      <div class="title_right">
        <p @click="guanzhu">
          <span>{{ isgz | filgz }}</span>
          <!-- //lyx -->
        </p>
      </div>
    </div>
    <!-- tabs -->
    <van-tabs
      v-model="active"
      line-width=".46rem"
      line-height=".08rem"
      class="border-bottom"
      @click="changeTab"
    >
      <van-tab
        v-for="(item, index) in tab"
        :key="index"
        :title="item.title"
        :name="item.id"
      ></van-tab>
    </van-tabs>
    <!-- 老师简介 -->
    <div class="introduce" v-if="show">
      <div class="tea_user">老师简介</div>
      <div class="ince">{{ list.introduction }}</div>
    </div>
    <div class="curriculum" v-else>
      <ul>
        <li
          v-for="(item, index) in main"
          :key="index"
          @click="gotoCourseDetail(item.id)"
        >
          <img :src="item.cover_img" alt="" />
          <div class="right">
            <div class="right_title">{{ item.title }}</div>
            <div class="has_buy">
              <div class="has_name">{{ item.sales_num }}人已报名</div>
              <div class="isBuy">
                <span v-if="item.has_buy != 0">{{ item.has_buy }}</span>
                <span v-else class="is">免费 </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import courseTitle from "@/components/home/courseTitle";
import { Toast } from "vant";
import { getTeaDetail, getInce, getMain, getCollect } from "../../utils/api";
export default {
  components: {
    courseTitle,
  },
  data() {
    return {
      isgz: 1, //判断是否关注
      tab: [
        { title: "讲师介绍", id: 1 },
        { title: "主讲课程", id: 2 },
      ],
      active: 0,
      show: true,
      list: [],
      main: [], //主讲课程
    };
  },
  computed: {},
  created() {
  },
  mounted(){
    this.getTeaDetails();
  },
  filters: {
    filgz(newval) {
      var str = "";
      if (newval == 2) {
        str = "关注";
        return str;
      } else {
        str = "取消关注";
        return str;
      }
    },
  },
  methods: {
    getTeaDetails() {
      
      getTeaDetail(this.$route.query.id).then((res) => {
        if (res.data.code == 200) {
          this.list = res.data.data.teacher;
          this.isgz = res.data.data.flag;
   
        }
      });
    },
    // 去课程详情页面
    gotoCourseDetail(id) {
      this.$router.push({ path: "/courseDetail", query: { id } });
    },
    guanzhu() {
      getCollect(parseInt(this.$route.query.id)).then((res) => {
        console.log(res);
        this.isgz=res.data.data.flag
               if(this.isgz==1){
           Toast('关注成功');
          }else{
           Toast('取消成功');

          }
      });
    },
    // tab选项卡
    changeTab(val) {
      this.show = !this.show;
      if (this.show) {
        getInce(this.$route.query.id).then((res) => {
          console.log(res);
        });
      } else if (!this.show) {
        getMain(this.$route.query.id).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.main = res.data.data.list;
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.teaDetail {
  height: 100%;
  height: 100%;
  font-size: 0.24rem;
  background: #fff;
  .title {
    padding: 0.6rem 0.2rem 0 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title_left {
      img {
        width: 1.64rem;
        height: 1.64rem;
        border-radius: 0.9rem;
        vertical-align: top;
      }
      span {
        margin-left: 0.2rem;
        font-size: 0.3rem;
      }
    }
    .title_right {
      p {
        width: 1.2rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        border-radius: 0.2rem;
        color: orange;
        border: 1px solid gray;
      }
    }
  }
  /deep/.van-tabs {
    // height: 0.8rem;\
    width: 96%;
    margin: 0.2rem auto 0;
    // margin-top: 0.2rem;
  }
  /deep/.van-tabs--line .van-tabs__wrap {
    height: 60px;
  }
  /deep/.van-tab {
    font-size: 0.3rem;
  }
  .introduce {
    padding: 0 0.2rem;
    .tea_user {
      line-height: 1rem;
      color: gray;
    }
    .ince {
      font-size: 0.3rem;
    }
  }
  .curriculum {
    width: 90%;
    margin: 0 auto;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 2.32rem;
          height: 1.36rem;
          border-radius: 0.2rem;
        }
        .right {
          flex: 1;
          height: 1.36rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: 0.2rem;
          .right_title {
            font-size: 0.28rem;
          }
          .has_buy {
            display: flex;
            justify-content: space-between;
            .has_name {
              color: gray;
            }
            .isBuy {
              .is {
                color: green;
                font-size: 0.28rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
