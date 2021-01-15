<template>
  <div class="course">
    <div class="dv">
      <courseTitle title="课程详情"></courseTitle>
    </div>
    <div class="course_content">
      <!-- 课程标题 -->
      <div class="course_title">
        <div class="title">
          <div class="left">css3</div>
          <van-icon
            name="star-o"
            @click="shoucang"
            :class="state ? 'red' : ''"
          />
        </div>
        <div>免费</div>
        <div>共2课时|52797人已报名</div>
      </div>
      <!-- 课程团队 -->
      <div class="course_team">
        <div class="team_title">教学团队</div>
        <div class="team">
          <div class="dv">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt=""
              class="avatar"
            />
            <p>css3</p>
          </div>
          <div class="dv">
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt=""
              class="avatar"
            />
            <p>css3</p>
          </div>
        </div>
      </div>
      <!-- 课程介绍 -->
      <div class="course_introduce">
        <div class="introduce_title">课程介绍</div>
        <div class="introduce">
          css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画css3转换过度动画
        </div>
      </div>
      <!-- 课程评论 -->
      <div class="course_comment">
        <div class="comment_title">课程评论</div>
        <div class="comment">
          <ul>
            <li>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
                class="avatar"
              />
              <div class="user">
                <div class="username">
                  <div class="name">傲之猎妈人</div>
                  <div>******</div>
                </div>
                <div class="comment_list">??????</div>
              </div>
              <div class="time">1970-01-19 19:07</div>
            </li>
            <li>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
                class="avatar"
              />
              <div class="user">
                <div class="username">
                  <div class="name">夜的微凉</div>
                  <div>******</div>
                </div>
                <div class="comment_list">1232132</div>
              </div>
              <div class="time">1970-01-19 19:11</div>
            </li>
            <li>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
                class="avatar"
              />
              <div class="user">
                <div class="username">
                  <div class="name">夜的微凉</div>
                  <div>******</div>
                </div>
                <div class="comment_list">1232132</div>
              </div>
              <div class="time">1970-01-19 19:11</div>
            </li>
            <li>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
                class="avatar"
              />
              <div class="user">
                <div class="username">
                  <div class="name">夜的微凉</div>
                  <div>******</div>
                </div>
                <div class="comment_list">1232132</div>
              </div>
              <div class="time">1970-01-19 19:11</div>
            </li>
            <li>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
                alt=""
                class="avatar"
              />
              <div class="user">
                <div class="username">
                  <div class="name">夜的微凉</div>
                  <div>******</div>
                </div>
                <div class="comment_list">1232132</div>
              </div>
              <div class="time">1970-01-19 19:11</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 立即报名 -->
    <div class="login">
      <button @click="baoming">立即报名</button>
    </div>
  </div>
</template>
<script>
import courseTitle from "@/components/home/courseTitle";
import { Toast } from "vant";
export default {
  components: {
    courseTitle,
    show: false,
  },
  data() {
    return {
      count: 0,
      state: false,
    };
  },
  mounted() {},
  methods: {
    baoming() {
      Toast("已报名");
    },
    shoucang() {
      //   console.log(this.count);
      // this.count++;
      console.log(this.count);
      this.state = !this.state;
      if (!this.state) {
        Toast("已取消收藏");
      } else {
        Toast("已收藏");
      }
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
  > .dv {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 1rem;
    z-index: 999;
  }

  .course_content {
    margin-top: 1rem;
    height: calc(100% - 1rem);
    .course_title {
      height: 1.3rem;
      padding: 0 0.14rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background: #fff;
      .title {
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        .van-icon {
          color: black;
        }
        /deep/ .red {
          color: orangered;
        }
      }
      :nth-child(2) {
        color: orange;
      }
      :nth-child(3) {
        color: gray;
      }
    }
    .course_team {
      width: 100%;
      //   height: 1.6rem;
      margin-top: 0.2rem;
      padding: 0 0.2rem;
      padding-top: 0.2rem;
      background: #fff;
      min-width: 1.6rem;
      .team_title {
      }
      .team {
        height: 1.2rem;
        display: flex;
        align-items: center;
        .dv {
          width: 0.8rem;
          text-align: center;
          .avatar {
            width: 0.5rem;
            border-radius: 0.25rem;
          }
          p {
            margin-top: 0.1rem;
          }
        }
      }
    }
    .course_introduce {
      min-height: 1.6rem;
      padding-top: 0.2rem;
      background: #fff;
      margin-top: 0.2rem;
      .introduce_title {
        margin-left: 0.2rem;
      }
      .introduce {
        margin: 0 0.2rem;
        margin-top: 0.2rem;
        line-height: 0.3rem;
        letter-spacing: 1px;
      }
    }
    .course_comment {
      width: 100%;
      margin-top: 0.2rem;
      padding-left: 0.2rem;
      background: #fff;
      padding-bottom: 0.6rem;
      .comment_title {
        padding-top: 0.2rem;
      }
      .comment {
        width: 100%;

        ul {
          width: 100%;
          li {
            width: 100%;
            height: 0.8rem;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            margin-top: 0.1rem;
            .avatar {
              width: 0.4rem;
              height: 0.4rem;
              border-radius: 0.3rem;
              margin-top: 0.1rem;
            }
            .user {
              flex: 1;
              height: 0.8rem;
              margin-left: 0.2rem;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              .username {
                display: flex;
                .name {
                  margin-right: 0.2rem;
                }
                :nth-child(2) {
                  color: orange;
                  letter-spacing: 0.04rem;
                }
              }
            }
            .time {
              margin-top: 0.1rem;
            }
          }
        }
      }
    }
  }
  .login {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 0.6rem;
    margin-top: 0.6rem;
    background: orangered;
    text-align: center;
    button {
      height: 0.6rem;
      background: orangered;
      border: none;
      color: white;
    }
  }
}
</style>
