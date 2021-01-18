<template>
  <div id="teacher">
    <div class="tea" v-for="(item, index) in list" :key="index">
      <div class="title">
        <p></p>
        <p>{{ item.channel_info.name }}</p>
      </div>
      <div class="teacher">
        <ul>
          <li
            @click="gototeaList(item.teacher_id)"
            v-for="(item, index) in item.list"
            :key="index"
          >
            <img :src="item.teacher_avatar | filterimg" alt="" />
            <div class="right">
              <h3>{{ item.teacher_name | filterTitle }}</h3>
              <div class="text">
                {{ item.introduction | filterText }}
              </div>
            </div>
          </li>
        </ul>
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
      this.list = data;
    },
    gototeaList(id) {
      console.log(id);
      if (localStorage.getItem("token")) {
        this.$router.push({ path: "course",query:{id}});
      } else {
        let show = "true";
        this.$store.commit("teashow", show);
      }
    },
  },
  filters: {
    filterimg(val) {
      // console.log(val);
      if (val) {
        return val;
      } else {
        return "http://120.53.31.103:84/uploads/image/2020-05-27/kJOxXbKMZBvh0ZlAu6Uw9EUPn64qFyiXLD318XRB.jpeg";
      }
    },
    filterTitle(val) {
      // console.log(val);
      if (val) {
        return val;
      } else {
        return "1234";
      }
    },
    filterText(val) {
      if (val) {
        return val;
      } else {
        return "加热 加热 再加热  锤  锤 锤";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
        border-radius: 0.1rem;
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
</style>
