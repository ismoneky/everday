<template>
  <div class="thelogin">
    <div class="logo">
      <img src="/logo.jpg" alt="" />
    </div>
    <div class="ipt">
      <div class="ipt-mobile">
        <i class="iconfont icon-shouji54"></i>
        <section class="border-bottom">
          <input
            type="text"
            placeholder="请输入手机号"
            v-model="userobj.mobile"
          />
        </section>
      </div>
      <div class="ipt-validation"></div>
      <div class="ipt-mobile">
        <i class="iconfont icon-icon_anquan"></i>
        <section class="border-bottom">
          <input
            type="password"
            placeholder="请输入密码"
            v-model="userobj.password"
          />
        </section>
      </div>
      <div class="ipt-validation"></div>
    </div>
    <div class="divbtn">
      <div class="btn" @click="tologin">
        登录
      </div>
    </div>
    <div class="tengxun">
      <i class="iconfont icon-gongzhonghao"></i>
      <i class="iconfont icon-qq"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getLogin } from "../../utils/api";
import { mapState } from "vuex";
import { Toast } from 'vant';
import Vue from 'vue'

Vue.use(Toast);
export default {
  name: "login",
  data() {
    return {
      userobj: {
        mobile: "15810195203",
        password: "6666666666",
        type: 1,
      },
    };
  },
  computed: {

  },
  created() {},
  methods: {
    async tologin() {
      var ref = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (this.userobj.mobile.match(ref)) {
        let { data } = await getLogin(this.userobj);
        if (data.code === 200) {
          localStorage.setItem("token", data.data.remember_token);
          this.$router.push('/')
         Toast.success('登录成功')
        }
      } else {
        Toast.fail("请输入正确手机号");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.thelogin {
  width: 100%;
  height: 100%;
  background: white;
}
.logo {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: 2.5rem;
  }
}
.ipt {
  width: 100%;
  height: 2rem;
  padding: 0 0.4rem;
  .ipt-mobile {
    width: 100%;
    height: 0.8rem;
    padding: 0 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    font-size: 0.34rem;
    margin-top: 0.1rem;
    i {
      color: orange;
      font-size: 0.4rem;
    }
    section {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      input {
        border: none;
        outline: none;
        font-size: 0.3rem;
      }
    }
  }
}
.divbtn {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    width: 78%;
    height: 0.8rem;
    border-radius: 0.1rem;
    background: coral;
    line-height: 0.8rem;
    text-align: center;
    color: white;
    font-size: 0.32rem;
    letter-spacing: 0.2rem;
  }
}
.tengxun {
  margin: 3rem auto;
  width: 70%;
  align-items: center;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  i {
    width: 1rem;
    height: 1rem;
    border: 1px solid #cccccc;
    border-radius: 50%;
    font-size: 0.6rem;
    color: #cccccc;
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
