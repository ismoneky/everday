<template>
  <div class="mycollection">
    <top-nav title="我的收藏"></top-nav>
    <div class="content">
      <div class="content-list border-bottom" v-for="(item,index) in listArray" :key="index">
        <div class="list-left">
          <img :src="item.teachersAvatar" alt="" />
        </div>
        <div class="list-right">
          <h2><span>券</span>{{ item.title }}</h2>
          <b>845人已报名</b>
          <p>￥1998.0</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import topNav from "@/components/topNav";
import { getcollect } from "../../utils/api";
export default {
  components: { topNav },
  name: "mycollection",
  data() {
    return {
      obj: {
        page: 1,
        limit: 5,
        type: 1,
      },
      listArray: [],
    };
  },
  created() {
    getcollect(this.obj).then((res) => {
      console.log(res);
      this.listArray = res.data.data.list;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mycollection {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  background: white;
  height: calc(100% - 0.8rem);
  padding: 0.2rem;
  overflow: hidden;
  overflow-y: auto;
  .content-list {
    background: white;
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding: 0.3rem 0rem;
    .list-left {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
      }
    }
    .list-right {
      padding: 0.2rem;
      width: 57%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 0.28rem;
      h2 {
        font-size: 0.34rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        span {
          width: 0.38rem;
          border: 1px solid red;
          color: red;
          font-size: 0.28rem;
          line-height: 0.38rem;
          text-align: center;
          height: 0.38rem;
          display: block;
          margin-right: 0.2rem;
        }
      }
      b {
        font-size: 0.28rem;
        color: #cccccc;
      }
      p {
        font-size: 0.43rem;
        color: red;
      }
    }
  }
}
</style>
