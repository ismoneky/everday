<template>
  <div id="ggct">
    <div class="top">
      <div class="left">
        <van-icon name="arrow-left" size="24" @click="goback" />
      </div>
      <div class="right">
        <van-icon name="comment-o" size="24" />
        <van-icon name="star-o" size="24" />
        <van-icon name="records" size="24" />
      </div>
    </div>
    <div class="tab">
      <div class="left">物理学史</div>
      <div class="right">
        <p><span>1</span>/7</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrap_one">
        <div class="dx">多选</div>
        <p>1、<span>6.下列叙述正确的是（）</span></p>
      </div>
      <ul>
        <li>
          <input type="checkbox" />
          <p>A、<span>A.拉法第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、<span>A.拉法第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、<span>A.拉法第发现了电磁感应现象</span></p>
        </li>
        <li>
          <input type="checkbox" />
          <p>A、<span>A.拉法第发现了电磁感应现象</span></p>
        </li>
      </ul>
      <div class="wrap_two">
        <van-button color="#595959" plain class="btn">上一题</van-button>
        <van-button color="#595959" plain class="btn">确定</van-button>
        <van-button color="#595959" plain class="btn">下一题</van-button>
      </div>
      <div class="wrap_three">
        <van-button color="#595959" plain class="btn" @click="del"
          ><van-icon
            name="friends"
            color="#0097fa"
            class="tb"
          />移除错题</van-button
        >
        <van-button color="#595959" plain class="btn" @click="getflag"
          ><van-icon
            name="friends"
            color="#0097fa"
            class="tb"
            
          />查看答案</van-button
        >
      </div>
    </div>
    <div class="bottom" v-show="flag">
      <div class="bot_one">
        <p>正确答案:<span>A</span></p>
        <p>你的答案:<span>C</span></p>
      </div>
      <div class="bot_two">
        <p>考点</p>
        <ul>
          <li>物理</li>
          <li>物理学史</li>
        </ul>
      </div>
      <div class="bot_three">
        <p>解析：<span>暂无解析</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    goback() {
      this.$router.push("/ctjl");
    },
    del() {
      Dialog.confirm({
        message: "是否做对题目后自动移除该错题",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    getflag() {
      this.flag=!this.flag
    },
  },
};
</script>
<style lang="scss" scoped>
#ggct {
  width: 100%;
  height: 100%;
  background-color: white;
  .top {
    color: #595959;
    width: 100%;
    height: 0.9rem;
    line-height: 0.7rem;
    display: flex;
    padding: 0 0.2rem;
    border-bottom: 0.01rem solid #f0f2f5;
    .left {
      flex: 1;
    }
    .right {
      letter-spacing: 0.2rem;
    }
  }
  .tab {
    color: #595959;
    height: 0.7rem;
    width: 100%;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #f0f2f5;
    font-size: 0.26rem;
    display: flex;
    padding: 0 0.3rem;
    .left {
      flex: 1;
    }
    .right {
      font-size: 0.28rem;
      span {
        font-size: 0.4rem;
        color: #0097fa;
      }
    }
  }
  .wrapper {
    width: 100%;
    padding: 0.4rem;
    .wrap_one {
      display: flex;
      .dx {
        width: 0.8rem;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.22rem;
        background-color: #0097fa;
        text-align: center;
        color: #fff;
        border-radius: 0.2rem 0 0.2rem 0;
        margin-right: 0.2rem;
      }
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.12rem;
      }
    }
    ul {
      li {
        list-style: none;
        display: flex;
        padding: 0.25rem 0;
        align-items: center;
        text-align: left;
        input {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.3rem;
        }
        p {
          font-size: 0.3rem;
          span {
            font-size: 0.13rem;
          }
        }
      }
    }
    .wrap_two {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;
      .btn {
        height: 32px;
        padding: 0 8px;
        font-size: 12px;
      }
    }
    .wrap_three {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;
      .btn {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.12px;
        position: relative;
      }
      .tb {
        float: left;
        top: 0.15rem;
        font-size: 0.3rem;
      }
    }
  }
  .bottom {
    margin: 0 auto;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 4px 0px rgb(206, 206, 206);
    .bot_one {
      display: flex;
      padding: 0 0 0.2rem 0;
      p {
        margin-right: 1.5rem;
        font-size: 0.28rem;
        span {
          color: #22bfa7;
        }
      }
    }
    .bot_two {
      margin-bottom: 0.15rem;
      p {
        font-size: 0.28rem;
        color: #8c8c8c;
        margin-bottom: 0.15rem;
      }
      ul {
        display: flex;
        li {
          font-size: 0.25rem;
          padding: 0.1rem 0.2rem;
          background: linear-gradient(30deg, #0097fa, #0096f9);
          border-radius: 0.25rem;
          color: #fff;
          margin: 0 0.15rem;
          margin-bottom: .15rem;
          
        }
      }
    }
    .bot_three{
      font-size: .13rem;
    }
  }
}
</style>