<template>
  <div class="course">
    <div class="dv">
      <courseTitle title="课程详情"></courseTitle>
    </div>
    <div class="course_title">
      <div class="tea_age">
        <img
          src="http://120.53.31.103:84/uploads/image/2020-05-27/kJOxXbKMZBvh0ZlAu6Uw9EUPn64qFyiXLD318XRB.jpeg"
          alt=""
          class="avatar"
        />
        <div class="age">10年教龄</div>
      </div>
      <div class="guan" @click="fn">
        <span v-if="!state">关注</span>
        <span v-else>已关注</span>
      </div>
    </div>
    <div class="content">
      <div class="tab">
        <div class="tabs" v-for="item in tab" :key="item.id">
          {{ item.title }}
        </div>
      </div>
    </div>
    <!-- 立即报名 -->
    <div class="login">
      <button @click="baoming">立即预约</button>
    </div>
  </div>
</template>
<script>
import courseTitle from "@/components/home/courseTitle";
import { Toast } from "vant";
import { getTeaDetail } from "../../utils/api";
export default {
  components: {
    courseTitle,
    show: false,
  },
  data() {
    return {
      state: false,
      tab: [
        { title: "讲师介绍", id: 1 },
        { title: "主讲课程", id: 2 },
        { title: "学院评价", id: 3 },
      ],
    };
  },
  mounted() {
    getTeaDetail(this.$route.query.id).then((res) => {
      console.log(res);
    });
  },
  methods: {
    fn() {
      this.state = !this.state;
      if (!this.state) {
        Toast("已取消关注");
      } else {
        Toast("已关注");
      }
    },
    // 预报名
    baoming() {
      Toast("已报名");
    },
  },
};
</script>
<style lang="scss" scoped>
.course {
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  overflow: auto;
  background: whitesmoke;
  // > .dv {
  //   width: 100%;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   height: 1rem;
  //   z-index: 999;
  // }
  .course_title {
    width: 96%;
    margin: 0 auto;
    height: 1.4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    margin-top: -0.8rem;
    border-radius: 0.1rem;
    .tea_age {
      display: flex;
      align-items: center;
      .avatar {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
      }
      .age {
        margin-left: 0.2rem;
      }
    }
    .guan {
      width: 1rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      background: whitesmoke;
      border-radius: 0.2rem;
      color: orangered;
    }
  }
  .content {
    .tab {
      width: 96%;
      height: +++++++++1rem;
      margin: 0.2rem auto 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: #fff;
    }
  }
  .login {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 0.8rem;
    margin-top: 0.8rem;
    background: orangered;
    text-align: center;
    button {
      height: 0.8rem;
      background: orangered;
      border: none;
      color: white;
    }
  }
}
</style>
