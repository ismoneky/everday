<template>
  <div id="teacher">
    <div class="dv" v-for="(item, index) in list" :key="index">
      <div class="tea" v-if="item.channel_info.type == 3">
        <div class="title">
          <p></p>
          <p>{{ item.channel_info.name }}</p>
        </div>
        <div class="teacher">
          <ul>
            <li
              @click="gototeaDetail(item.teacher_id)"
              v-for="(item, index) in item.list"
              :key="index"
            >
              <img :src="item.teacher_avatar" alt="" />
              <div class="right">
                <h3>{{ item.teacher_name }}</h3>
                <div class="text">
                  {{ item.introduction }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="hot" v-else>
        <div class="title">
          <p></p>
          <p>{{ item.channel_info.name }}</p>
        </div>
        <div class="teacher">
          <ul>
            <li
              v-for="(item, index) in item.list"
              :key="index"
              @click="gotoHotDetail(item.id)"
            >
              <img :src="item.thumb_img" alt="" />
              <div class="right">
                <h3>{{ item.title }}</h3>
                <div class="text">
                  {{ item.description }}
                </div>
                <div class="bottom">
                  <div class="bottom_left">
                    <van-icon name="eye" />
                    <span>{{ item.click_rate }}</span>
                  </div>
                  <div class="bottom_right">
                    {{ item.created_at | filtime }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHome } from "../../utils/api";
export default {
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    this.fn();
  },
  methods: {
    async fn() {
      let { data } = await getHome();
      console.log(data);
      if (data.code === 200) {
        console.log(data.data);
        this.list = data.data;
      }
    },
    // 去老师详情页面
    gototeaDetail(id) {
      console.log(id);
      if (localStorage.getItem("token")) {
        this.$router.push({ path: "teaDetail", query: { id } });
      } else {
        let show = "true";
        this.$store.commit("teashow", show);
      }
    },
    // 去热门咨询详情页
    gotoHotDetail(id) {
      if (localStorage.getItem("token")) {
        this.$router.push({ path: "hotDetail", query: { id } });
      } else {
        let show = "true";
        this.$store.commit("teashow", show);
      }
    },
  },

  filters: {
    filtime(val) {
      var time = new Date(val * 1000);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = time.getHours();
      var minutes = time.getMinutes();
      var second = time.getSeconds();
      return `${year}/${month
        .toString()
        .padStart(2, 0)}/${day
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
.dv:last-child {
  margin-bottom: 1rem;
}
.tea {
  .title {
    width: 90%;
    margin: 0 auto;
    height: 1rem;
    display: flex;
    align-items: center;
    p {
      height: 0.4rem;
      line-height: 0.4rem;
    }
    p:nth-child(1) {
      width: 0.1rem;
      background: #eb6100;
    }
    p:nth-child(2) {
      font-size: 0.32rem;
      margin-left: 0.4rem;
    }
  }
  .teacher {
    width: 100%;
    font-size: 0.24rem;
    margin: 0 auto;
    //   background: #f0f2f5;
    ul {
      width: 90%;
      margin: 0 auto;
      li {
        height: 1.62rem;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 0 0.2rem;
        border-radius: 0.2rem;
        margin-bottom: 0.2rem;

        img {
          width: 0.79rem;
          height: 0.79rem;
          border-radius: 0.38rem;
        }
        .right {
          height: 100%;
          margin-left: 0.2rem;
          padding: 0.2rem 0;
          width: calc(100% - 0.9rem);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          h3 {
            color: #595959;
            height: 0.3rem;
            font-size: 0.32rem;
          }
          .text {
            width: 100%;
            color: #b7b7b7;
            overflow: hidden; //多出部分隐藏
            white-space: nowrap; //一行显示 nowrap不换行
            text-overflow: ellipsis; //是否显示省略号
          }
        }
      }
      :last-child {
        margin: 0;
      }
    }
  }
}
.hot {
  .title {
    width: 90%;
    margin: 0 auto;
    height: 1rem;
    display: flex;
    align-items: center;
    p {
      height: 0.4rem;
      line-height: 0.4rem;
    }
    p:nth-child(1) {
      width: 0.1rem;
      background: #eb6100;
    }
    p:nth-child(2) {
      font-size: 0.32rem;
      margin-left: 0.4rem;
    }
  }
  .teacher {
    width: 100%;
    font-size: 0.24rem;
    margin: 0 auto;
    //   background: #f0f2f5;
    ul {
      width: 90%;
      margin: 0 auto;
      li {
        height: 1.62rem;
        display: flex;
        align-items: center;
        background: #fff;
        padding: 0 0.2rem;
        border-radius: 0.2rem;
        margin-bottom: 0.2rem;

        img {
          width: 2.1rem;
          height: 1.3rem;
          // border-radius: 0.38rem;
        }
        .right {
          height: 100%;
          margin-left: 0.2rem;
          // padding: 0.2rem 0;
          width: calc(100% - 2.2rem);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          h3 {
            color: #595959;
            height: 0.3rem;
            font-size: 0.32rem;
          }
          .text {
            width: 100%;
            color: #b7b7b7;
            overflow: hidden; //多出部分隐藏
            white-space: nowrap; //一行显示 nowrap不换行
            text-overflow: ellipsis; //是否显示省略号
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            padding-right: 0.1rem;
            color: #b7b7b7;
            .bottom_left {
              display: flex;
              align-items: center;
              font-size: 0.22rem;
              i {
                margin-right: 0.1rem;
              }
            }
            .bottom_right {
              font-size: 0.22rem;
            }
          }
        }
      }
      :last-child {
        margin: 0;
      }
    }
  }
}
</style>
