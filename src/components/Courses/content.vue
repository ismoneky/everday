<template>
  <div id="top_cont">
    <div class="Cards">
      <h3>李老师16号到22号地理大课堂开课啦</h3>
      <p>
        <span class="time"
          ><van-icon name="clock-o" class="time1" /> 03月16日 18:30~03月22日
          15:00 | 共8课时</span
        >
      </p>
      <div class="user">
        <div>
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          />
          <span>李青</span>
        </div>
      </div>
      <p class="bottom">
        <span class="bm">178人已报名</span>
        <span class="mf">免费</span>
      </p>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import {getTeachers} from '../../utils/api/index'
export default {
  data() {
    return {

    };
    
  },
  created() {
    getTeachers().then(res=>{
      console.log(res);
    })
  },
};
</script>
<style lang="scss" scoped>
#top_cont {
  width: 100%;
  padding: 0.3rem;
  // background-color: red;
  .Cards {
    width: 100%;
    // height: 4rem;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 6px;
    h3 {
      // background-color: bisque;
      padding-top: 0.3rem;
    //   padding-left: 0.3rem;
      font-size: 4.26667vw;
    }
    p {
      padding-top: 0.1rem;
    //   padding-left: 0.3rem;
      height: 0.5rem;
      line-height: 0rem;
      .time1 {
        font-size: 4vw;
        font-weight: 600;
        color: #666;
      }
      .time {
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #666;
        font-size: 3.2vw;
      }
    }
    .user {
    //   padding-left: 0.3rem;
      width: 100%;
      height: 1.5rem;
      // background-color: blueviolet;
      div {
        height: 100%;
        line-height: 100%;

        img {
          margin-top: 0.45rem;
          float: left;
          width: 0.6rem;
        }
        span {
          margin-left: 2.26667vw;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          font-size: 3.2vw;
        }
      }
    }
    .bottom {
      border-top: 1px solid #f5f5f5;
      height: 7.73333vw;
      line-height: 8.73333vw;
      display: flex;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular;
      .bm{
          flex: 9;
          color: rgba(0,0,0,.45);
      }
      .mf{
             color: #44a426;
            font-size: 4.26667vw;
      }
    }
  }
}
</style>