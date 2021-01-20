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
          <img :src="user.avatar" alt="" />
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>
      <van-action-sheet
        v-model="show"
        cancel-text="取消"
        close-on-click-action
        @select="changacatar"
      >
        <van-uploader :after-read="afterRead" class="paizhao"
          >拍照</van-uploader
        >
      </van-action-sheet>

      <div class="chang_head border-bottom" @click="toname">
        <section class="head_left">
          <span>姓名</span>
          <span class="left_cont">{{ user.nickname }}</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom">
        <section class="head_left">
          <span>手机号码</span>
          <span class="left_cont">{{ user.mobile }}</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom" @click="tosex">
        <section class="head_left">
          <span>性别</span>
          <span class="left_cont">{{ user.sex | sex }}</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <div class="chang_head border-bottom" @click="datashow = true">
        <section class="head_left">
          <span>出生日期</span>
          <span class="left_cont">{{ user.birthday }}</span>
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
          <span class="left_cont">
            <span>{{ user.province_name }}-</span>
            <span>{{ user.city_name }}-</span>
            <span>{{ user.district_name }}</span>
          </span>
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
        <van-area
          title=""
          :area-list="areaList"
          @confirm="citychange"
          @cancel="cityoff"
        />
      </van-action-sheet>

      <div class="chang_head border-bottom" @click="classhow = true">
        <section class="head_left">
          <span>年级</span>
          <span class="left_cont">{{ grade }}</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>

      <van-action-sheet
        v-model="classhow"
        cancel-text="取消"
        close-on-click-action
      >
        <van-picker
          title="选择年级"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="classhow = false"
        />
      </van-action-sheet>

      <div class="chang_head border-bottom" @click="subject = true">
        <section class="head_left">
          <span>学科</span>
          <span class="left_cont">{{ str }}</span>
        </section>
        <section class="head_right">
          <van-icon name="arrow" />
        </section>
      </div>
      <van-popup v-model="subject">
        <div class="subject-list">
          <p>学科选择</p>
          <div class="list-cont">
            <section
              ref="subjectclass"
              v-for="(item, index) in classlist"
              :key="index"
              @click="ckclass(index)"
              :style="
                item.falg === true
                  ? [{ background: 'orange' }, { color: 'white' }]
                  : ''
              "
            >
              {{ item.name }}
            </section>
          </div>
          <div class="surebtn" @click="suresub">
            确定
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import city from "@/components/city";
import topNav from "@/components/topNav";
import { getprofile, getuserinfo, changeimg } from "../../utils/api/index";
export default {
  components: { topNav },
  name: "compile",
  filters: {
    sex(val) {
      if (val === 1) {
        return "男";
      } else {
        return "女";
      }
    },
  },
  data() {
    return {
      date: "",
      obj: {
        birthday: "",
      },
      objimg: {
        avatar: "",
      },
      imgArray: [],
      show: false,
      datashow: false,
      cityshow: false,
      classhow: false,
      subject: false,
      minDate: new Date(1960, 0, 1),
      maxDate: new Date(2021, 10, 1),
      currentDate: new Date(),
      columns: [
        "初一",
        "初二",
        "初三",
        "高一",
        "高二",
        "高三",
        "大一",
        "大二",
        "大三",
      ],
      classlist: [
        {
          name: "语文",
          falg: false,
        },
        {
          name: "数学",
          falg: false,
        },
        {
          name: "英语",
          falg: false,
        },
        {
          name: "物理",
          falg: false,
        },
        {
          name: "化学",
          falg: false,
        },
        {
          name: "生物",
          falg: false,
        },
        {
          name: "政治",
          falg: false,
        },
        {
          name: "历史",
          falg: false,
        },
        {
          name: "地理",
          falg: false,
        },
      ],
      grade: "高一",
      areaList: city,
      cityObj: {
        province_name: "",
        city_id: "",
        district_id: "",
        city_name: "",
        district_name: "",
        province_id: "",
      },
      strsub: "",
    };
  },
  created() {
    this.userinfo();
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
    str() {
      return this.$store.state.subject;
    },
  },
  methods: {
    async userinfo() {
      console.log(1);
      let { data } = await getprofile();
      if (data.code == 200) {
        this.$store.commit("loginStore/setUser", data.data);
      }
    },
    toname() {
      this.$router.push("/changename");
    },
    tosex() {
      this.$router.push("/changesex");
    },

    async confirm(val) {
      // console.log(val);
      this.date = new Date(val);
      this.obj.birthday =
        this.date.getFullYear() +
        "-" +
        (this.date.getMonth() + 1) +
        "-" +
        this.date.getDate();

      let { data } = await getuserinfo(this.obj);
      this.datashow = false;
      this.$router.go(0);
    },
    cancel() {
      console.log(2);
      this.datashow = false;
    },
    async citychange(val) {
      var cityArray = val;
      console.log(cityArray);
      this.cityObj.province_name = cityArray[0].name;
      this.cityObj.province_id = cityArray[0].code;
      this.cityObj.city_name = cityArray[1].name;
      this.cityObj.city_id = cityArray[1].code;
      this.cityObj.district_name = cityArray[2].name;
      this.cityObj.district_id = cityArray[2].code;
      let { data } = await getuserinfo(this.cityObj);
      this.$router.go(0);
      this.cityshow = false;
    },
    cityoff() {
      this.cityshow = false;
    },
    changacatar(action) {
      if (action.name === "从手机中选择") {
      }
    },
    async afterRead(file) {
      console.log(file.file);
      var formData = new FormData();
      formData.append("file", file.file);
      console.log(formData.get("file"));
      let { data } = await changeimg(formData);
      if (data.code == 200) {
        this.objimg.avatar = data.data.path;
        getuserinfo(this.objimg);
      }
      this.show = false;
    
    },
    onConfirm(value) {
      this.grade = value;
      this.classhow = false;
    },
    ckclass(i) {
      this.classlist[i].falg = !this.classlist[i].falg;
      this.strsub = "";
      this.classlist.forEach((item) => {
        if (this.strsub == "") {
          if (item.falg) {
            this.strsub += item.name;
          }
        } else {
          if (item.falg) {
            this.strsub += "/" + item.name;
          }
        }
      });
    },
    suresub() {
      this.$store.commit("changesub", this.strsub);
      this.subject = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.compile {
  width: 100%;
  height: 100%;
}
// border: 1px solid orange;
//     background: rgba(rgb(255, 234, 196) , 0.3);
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
.paizhao {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.32rem;
}
/deep/.van-uploader__input-wrapper {
  width: 100%;
}
.subject-list {
  width: 7rem;
  height: 6rem;
  background: white;
  font-size: 0.32rem;
  text-align: center;
  padding: 0.2rem;
  p {
    font-size: 0.36rem;
    font-weight: 600;
  }
  .list-cont {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.2rem;
    section {
      // flex: 3;
      width: 30%;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      border: 1px solid #cccccc;
    }
  }
  .surebtn {
    width: 3rem;
    height: 0.6rem;
    background: orangered;
    color: white;
    line-height: 0.6rem;
    margin: 0 auto;
  }
}
</style>
