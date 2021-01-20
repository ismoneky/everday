<template>
  <div class="myclass">
    <top-nav title="我的课程"></top-nav>
    <div class="content">
      <van-tabs v-model="active" @click="clicktype">
        <van-tab
          v-for="(item, index) in TypeArray"
          :key="item.type"
          :title="`${item.name}(${item.num})`"
        ></van-tab>
      </van-tabs>
      <div class="cont-list">
        <div class="list" v-for="item in listArray" :key="item.id">
          <section>
            <img src="/avatar.jpg" />
          </section>
          <section class="list-right">
            <p>
              {{ item.start_play_date | filtiem }}
              {{ item.end_play_date | filtiem }}
            </p>
            <p style="color:orange">{{ item.title }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav";
import { getTs } from "../../utils/api";
export default {
  components: { topNav },
  name: "myclass",
  data() {
    return {
      active: "0",
      TypeArray: [],
      listArray: [],
      oldlist: [],
    };
  },
  filters: {
    filtiem(newval) {
      var date = new Date(parseInt(newval) * 1000);
      let create_time = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} 0${date.getHours()}: 0${date.getMinutes()}`;
      return create_time;
    },
  },
  created() {
    getTs().then((res) => {
      this.TypeArray = res.data.data.typeNum;
      this.listArray = res.data.data.courseList;
      this.oldlist = JSON.stringify(this.listArray);
    });
  },
  mounted() {
    // this.fl();
  },
  methods: {

    fl() {
      let arr = JSON.parse(this.oldlist);
      console.log(arr,this.active);
      this.listArray = arr.filter(item=>{
          console.log(this.TypeArray[this.active]);
        if( item.course_type === this.TypeArray[this.active].type){
        
          return item
        }
      })
    },
    clicktype() {
      this.fl();
    },
  },
};
</script>

<style lang="scss" scoped>
.myclass {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: calc(100% - 0.8rem);
    padding-top: 0.2rem;
  }
}
.cont-list {
  width: 100%;
  height: 100%;
  font-size: 0.28rem;
  .list {
    width: 100%;
    height: 1.2rem;
    margin-top: 0.1rem;
    background: white;
    display: flex;
    align-items: center;
    padding: 0.2rem;
    img {
      width: 1rem;
      height: 1rem;
    }
    .list-right {
      height: 100%;
      margin-left: 0.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
