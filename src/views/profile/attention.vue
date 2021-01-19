<template>
  <div class="attention">
    <top-nav title="我的关注"></top-nav>
    <div class="content">
      <div
        class="list-div"
        v-for="item in list"
        :key="item.collect_id"
      >
        <section>
          <img :src="item.avatar" alt="" />
        </section>
        <section class="list-name">
          <p class="p-name">
            <span>{{ item.teacher_name }}</span
            ><span class="guanzhu">已关注</span>
          </p>
          <p class="p-deatil">{{ item.introduction }}</p>
        </section>
        <section class="btn">
          <span>查看详情</span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "../../components/topNav.vue";
import { getcollect } from "../../utils/api/index";
export default {
  components: { topNav },
  name: "",
  data() {
    return {
      list: [],
      obj: {
        page: 1,
        limit: 5,
        type: 2,
      },
    };
  },
  created() {
    getcollect(this.obj).then((res) => {
      console.log(res);
      this.list = res.data.data.list;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.attention {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: calc(100% - 0.8rem);
    padding: 0.2rem;
  }
}
.list-div {
  width: 100%;
  height: 1.5rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  background: #fff;
  padding: 0 0.2rem;
  position: relative;
  margin-top: 0.1rem;
  img {
    width: 1rem;
    height: 1rem;
  }
  .list-name {
    width: 4rem;
    height: 1.2rem;
    font-size: 0.32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.1rem;
    .p-name {
      font-size: 0.34rem;
      font-weight: 600;
    }
    .guanzhu {
      font-size: 0.3rem;
      color: orange;
      margin-left: 0.3rem;
    }
    .p-deatil {
      font-size: 0.28rem;
      color: #cccccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .btn {
    position: absolute;
    width: 2rem;
    height: 0.6rem;
    background: orangered;
    color: white;
    border-radius: 0.2rem;
    right: 0.2rem;
    line-height: 0.6rem;
    text-align: center;
  }
}
</style>
