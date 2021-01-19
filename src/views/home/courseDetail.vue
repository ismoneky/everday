<template>
  <div class="courseDetail">
    <div class="img">
      <img :src="info.cover_img" alt="" />
    </div>
    <div class="course_title">
      <div>{{ info.title }}</div>
      <div>
        <p>共{{ info.is_free }}课时</p>
        <span>|</span>
        <p>{{ info.sales_num }}人已报名</p>
      </div>
      <div>
        <p>开课时间:</p>
        <p>{{ info.start_play_date | filtimestart }}-</p>
        <p>{{ info.end_play_date | filtimeend }}</p>
      </div>
      <div>
        <div id="is">
          <p v-if="info.is_buy != 0">{{ info.is_buy }}</p>
          <p class="is">免费</p>
        </div>
        <div class="shou">
          <p @click="shou" v-if="!state"><van-icon name="star-o" /></p>
          <p @click="quxiaoshoucang" v-else><van-icon name="star" /></p>
        </div>
      </div>
    </div>
    <!-- 服务 -->
    <div class="server">
      <div class="server_left">
        <span>服务:</span>
        <span>{{ info.course_service_id }}</span>
      </div>
      <div class="server_right">
        <span>详情</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 团队 -->
    <div class="team">
      <div class="team_title">教学团队</div>
      <div class="team_list">
        <div class="dv" v-for="(item, index) in team" :key="index">
          <img :src="item.avatar" alt="" />
          <p>{{ item.teacher_name }}</p>
        </div>
      </div>
    </div>
    <!-- tab选项卡 -->
    <div class="tab border-bottom">
      <div
        v-for="(item, index) in tab"
        @click="tabIndex = index"
        :style="{ color: tabIndex === index ? '#E60012' : '' }"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- 课程介绍 -->
    <div class="introduce">
      <div class="introduce_title">课程介绍</div>
      <div class="introduce_list">
        <div class="list">看图片片，是字字</div>
      </div>
    </div>
    <!-- 课程大纲 -->
    <div class="outline">
      <div class="outline_title">课程大纲</div>
      <ul>
        <li v-for="(item, index) in dg" :key="index">
          {{ item.periods_title }}
        </li>
      </ul>
    </div>
    <!-- 课程评价 -->
    <div class="comment">
      <div class="comment_title">课程评价</div>
      <div class="comment_list" v-if="comment.length != 0">
        <div class="list" v-for="(item, index) in comment" :key="index">
          <img :src="item.avatar" alt="" />
          <div class="list_right">
            <div class="top">
              <div class="nickname">{{ item.nickname }}</div>
              <div
                class="xing"
                v-for="(item, index) in item.grade"
                :key="index"
              >
                <van-icon name="star" />
              </div>
            </div>
            <div class="bottom">
              <div class="content">{{ item.content }}</div>
              <div class="time">{{ item.created_at | filtime }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="else" v-else>
        <img src="@/assets/img/else.png" alt="" />
        <p>暂无评论</p>
      </div>
    </div>
    <!-- 立即报名 -->
    <div class="baoming">
      <p @click="btn">立即报名</p>
    </div>
  </div>
</template>
<script>
import {
  getCourseDetail,
  getCoursedaGang,
  getCourseInce,
  getCourseComment,
  getCourseShouCang,
  getbaoming,
  getCourseQuXiaoShouCang,
} from "../../utils/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      list: {},
      info: {},
      team: [],
      tab: [
        { title: "课程介绍", id: 1 },
        { title: "课程大纲", id: 2 },
        { title: "课程评价", id: 3 },
      ],
      dg: [],
      comment: [],
      tabIndex: 0,
      type: "",
      spell_id: "",
      is_free: "",
      state: false,
    };
  },
  mounted() {
    this.CourseDetail();
    this.coursedg();
    this.courseInce();
    this.getcomment();
    // this.shoucang();
  },
  methods: {
    //   课程详情
    async CourseDetail() {
      let { data } = await getCourseDetail(this.$route.query.id);
      console.log(data);
      this.list = data.data;
      this.info = data.data.info;
      this.team = data.data.teachers;
      this.type = data.data.info.course_type;
      this.spell_id = data.data.info.spell_id;
      this.is_free = data.data.info.is_free;
      console.log(this.list);
    },
    // 课程介绍
    async courseInce() {
      let { data } = await getCourseInce(this.$route.query.id);
      console.log(data);
    },
    // 课程大纲
    async coursedg() {
      let { data } = await getCoursedaGang(this.$route.query.id);
      console.log(data);
      if (data.code == 200) {
        this.dg = data.data;
      }
    },
    // 课程评价
    async getcomment() {
      let { data } = await getCourseComment(this.$route.query.id);
      console.log(data);
      this.comment = data.data.list;
      console.log(this.comment);
    },
    // 收藏
    shou() {
      let id = parseInt(this.$route.query.id);
      getCourseShouCang(id).then((res) => {
        console.log(res);
        if (res.data.code) {
          this.state = true;
          Toast("已收藏");
        }
      });
    },
    // 取消收藏
    quxiaoshoucang() {
      getCourseQuXiaoShouCang(this.$route.query.id).then(res=>{
        console.log(res);
      })
    },
    //报名
    btn() {
      console.log(this.type);
      console.log(this.spell_id);
      console.log(this.is_free);
      // let obj = {
      //   type: this.type,
      //   id: this.$route.query.id,
      //   spell_id: this.spell_id,
      //   is_free: this.is_free,
      // };
      getbaoming(this.$route.query.id).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          Toast("报名成功");
        } else if (res.data.code == 201) {
          Toast(res.data.msg);
        }
      });
    },
  },

  filters: {
    filtimestart(val) {
      var time = new Date(val * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      return `${year}-${month
        .toString()
        .padStart(2, 0)}-${day
        .toString()
        .padStart(2, 0)} ${hour
        .toString()
        .padStart(2, 0)}:${minutes
        .toString()
        .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
    },
    filtimeend(val) {
      var time = new Date(val * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      return `${year}-${month
        .toString()
        .padStart(2, 0)}-${day
        .toString()
        .padStart(2, 0)} ${hour
        .toString()
        .padStart(2, 0)}:${minutes
        .toString()
        .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
    },
    filtime(val) {
      var time = new Date(val * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      return `${year}-${month
        .toString()
        .padStart(2, 0)}-${day
        .toString()
        .padStart(2, 0)} ${hour
        .toString()
        .padStart(2, 0)}:${minutes
        .toString()
        .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.courseDetail {
  width: 100%;
  height: 100%;
  overflow: auto;
  font-size: 0.24rem;
  .img {
    width: 100%;
    height: 4.4rem;
    img {
      width: 100%;
      height: 4.4rem;
    }
  }
  .course_title {
    padding-left: 0.2rem;
    background: #fff;
    div:first-child {
      line-height: 0.6rem;
      font-size: 0.3rem;
    }
    div:nth-child(2) {
      display: flex;
      height: 0.6rem;
      align-items: center;
      color: gray;
      font-size: 0.26rem;
      span {
        margin: 0 0.1rem;
      }
    }
    div:nth-child(3) {
      height: 0.6rem;
      display: flex;
      align-items: center;
      font-size: 0.26rem;
      color: gray;
    }
    div:last-child {
      font-size: 0.3rem;
      line-height: 0.8rem;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      padding-right: 0.2rem;
      align-items: center;
      .is {
        color: red;
      }
      .shou {
        color: orange;
      }
    }
  }
  .server {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    margin: 0.3rem 0 0.2rem;
    padding: 0 0.2rem;
    color: gray;
    .server_left {
      :nth-child(1) {
        font-size: 0.22rem;
        margin-right: 0.2rem;
      }
    }
    .server_right {
      display: flex;
      align-items: center;
      .van-icon {
        font-size: 0.3rem;
      }
    }
  }
  .team {
    width: 100%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: #fff;
    .team_title {
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
    .team_list {
      height: 2rem;
      display: flex;
      align-items: center;
      .dv {
        margin: 0 0.2rem;
        text-align: center;
        img {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 0.4rem;
        }
        p {
          line-height: 0.6rem;
        }
      }
    }
  }
  .tab {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #fff;
    margin-top: 0.2rem;
    > div {
      font-size: 0.3rem;
    }
  }
  .introduce {
    width: 100%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: #fff;
    .introduce_title {
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
    .introduce_list {
      line-height: 0.6rem;
      padding-left: 0.1rem;
    }
  }
  .outline {
    width: 100%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: #fff;
    margin-top: 0.2rem;
    .outline_title {
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
    ul {
      list-style: disc;
      padding-left: 0.6rem;
      li {
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }
  }
  .comment {
    width: 100%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: #fff;
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    .comment_title {
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
    .comment_list {
      .list {
        height: 1rem;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        img {
          width: 0.6rem;
        }
        .list_right {
          height: 1rem;
          flex: 1;
          margin-left: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.1rem 0;
          padding-right: 0.2rem;
          .top {
            display: flex;
            .xing {
              display: flex;
              .van-icon {
                color: orangered;
                // background: orangered;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
    .else {
      text-align: center;
      img {
        width: 3rem;
        height: 3rem;
      }
      p {
        font-size: 0.3rem;
        line-height: 0.6rem;
      }
    }
  }
  .baoming {
    width: 96%;
    height: 0.8rem;
    // margin: 0.8rem auto 0;
    position: fixed;
    bottom: 0;
    text-align: center;
    background: #fff;
    padding-top: 0.1rem;
    p {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.3rem;
      background: #e60012;
      color: #fff;
      border-radius: 0.3rem;
      margin-left: 2%;
    }
  }
}
</style>
