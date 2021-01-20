<template>
  <div class="my_course_list">
    <header>
      <div class="title border-bottom">
        <div @click="back"><van-icon name="arrow-left" /></div>
        <div>{{ course.title }}</div>
        <div></div>
      </div>
      <div class="class_hour border-bottom">
        <div>共{{ course.section_num }}课时</div>
        <div>
          <van-progress :percentage="num | filternum" :show-pivot="false" />
        </div>
        <div>已学习{{ parseInt(course.video_progress_rate) }}%</div>
      </div>
    </header>
    <div class="content">
      <ul>
        <li v-for="(item, index) in periods" :key="index">
          <div>
            <span></span>
            <span>{{ item.periods_title }}</span>
          </div>
          <div>~</div>
          <div class="item">
            <van-progress
              :percentage="item.video_progress_rate | filternums"
              :show-pivot="false"
            />
            <p>已观看{{ item.video_progress_rate | filternums }}%</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getstudy } from "../../utils/api";
export default {
  data() {
    return {
      course: {},
      periods: [], //课程列表
      num: 0,
    };
  },
  mounted() {
    this.study();
    console.log(this.$route.query.id);
    // console.log(this.course.video_progress_rate);
  },
  methods: {
    async study() {
      let { data: res } = await getstudy(parseInt(this.$route.query.id));
      console.log(res);
      if (res.code == 200) {
        this.course = res.data.course;
        this.periods = res.data.periods;
        this.num = res.data.course.video_progress_rate;
      }
    },
    back(){
        this.$router.back()
    }
  },
  filters: {
    filternum(val) {
      //   return Number(val)
      //   console.log(parseInt(val));

      // console.log(typeof(val));

      //   console.log();
      return parseInt(val);
    },
    filternums(val) {
    //   console.log(typeof val);
      if (typeof val == "number") {
        return val;
      } else if (typeof val == "object") {
        return 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.my_course_list {
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 0.24rem;
  background: #fff;
  header {
    width: 100%;
    height: 1.8rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    .title {
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.2rem;
      .van-icon {
        font-size: 0.3rem;
      }
      div:nth-child(2) {
        font-size: 0.3rem;
      }
    }
    .class_hour {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: gray;
      div:nth-child(2) {
        flex: 0.8;
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 1.8rem);
    margin-top: 2rem;
    ul {
      width: 90%;
      height: 100%;
      margin: .22rem auto 0;
      li {
        height: 2.15rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.2rem;
        color: gray;
        margin-bottom: .22rem;
        border: 1px solid #DCDCDC;
        border-radius: .2rem;
        >div:nth-child(1) {
          display: flex;
          align-items: center;
          span:first-child {
            display: inline-block;
            width: 0.08rem;
            height: 0.08rem;
            background: red;
            margin-right: 0.2rem;
          }
        }
        .item {
        //   height: 0.6rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .van-progress{
              width: 70%;
          }
        }
      }
    }
  }
}
.gun::-webkit-scrollbar {
  display: none;
}
</style>
