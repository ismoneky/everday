<template>
  <div class="compile">
    <top-nav title="个人中心">
      <template v-solt="ico">
        <div>
          <van-icon name="search" />
        </div>
      </template>
    </top-nav>
    <div class="content">
      <div class="chang_head border-bottom" @click="show = true">
        <section class="head_left">
          <span>头像</span>
          <img :src="headimg" alt="" />
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="show = false"
      />

      <div class="chang_head border-bottom" @click="toname">
        <section class="head_left">
          <span>姓名</span>
          <span class="left_cont">李木木</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom">
        <section class="head_left">
          <span>手机号码</span>
          <span class="left_cont">13910199801</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom" @click="tosex">
        <section class="head_left">
          <span>性别</span>
          <span class="left_cont">女</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom" @click="datashow = true">
        <section class="head_left">
          <span>出生日期</span>
          <span class="left_cont">1998-05-21</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>
      <van-action-sheet
        v-model="datashow"
        cancel-text="取消"
        close-on-click-action
        @cancel="datashow = false"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirm"
          @cancel="cancel"
        />
      </van-action-sheet>

      <div class="chang_head border-bottom" @click="cityshow = true">
        <section class="head_left">
          <span>所在城市</span>
          <span class="left_cont">北京</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <van-action-sheet
        v-model="cityshow"
        cancel-text="取消"
        close-on-click-action
        @cancel="cityshow = false"
      >
        <van-area title="" :area-list="areaList" @confirm="citychange" @cancel='cityoff' />


      </van-action-sheet>

      <div class="chang_head border-bottom">
        <section class="head_left">
          <span>年级</span>
          <span class="left_cont">高一</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom">
        <section class="head_left">
          <span>学科</span>
          <span class="left_cont">数学\语文\英语\物理\化学</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import city from '@/components/city'
import topNav from "@/components/topNav";
export default {
  components: { topNav },
  name: "compile",
  data() {
    return {
      headimg: "/avatar.jpg",
      show: false,
      datashow: false,
      cityshow:false,
      actions: [{ name: "拍照" }, { name: "从手机相册选择" }],
      minDate: new Date(1960, 0, 1),
      maxDate: new Date(2021, 10, 1),
      currentDate: new Date(),
      areaList:city
    };
  },
  created() {
    
  },
  methods: {
    toname() {
      this.$router.push("/changename");
    },
    tosex() {
      this.$router.push("/changesex");
    },

    confirm(val) {
      console.log(val);
      this.datashow = false;
    },
    cancel() {
      console.log(2);
      this.datashow = false;
    },
    citychange(val){
      console.log(val);
      this.cityshow = false
    },
    cityoff(){
      this.cityshow = false
    }
  },
};
</script>

<style lang="scss" scoped>
.compile {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 0.9rem);
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  background: white;

  img {
    width: 0.7rem;
    height: 0.7rem;
    display: block;
  }
}
.chang_head {
  width: 100%;
  height: 1rem;
  display: flex;

  font-size: 0.28rem;
  background: white;
  .head_left {
    width: 92%;
    height: 100%;
    margin-right: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .head_right {
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.34rem;
  }
}
.left_cont {
  color: #b9b9b9;
  font-size: 0.3rem;
}
</style>
