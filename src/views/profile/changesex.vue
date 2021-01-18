<template>
  <div class="changesex">
    <top-nav title="修改性别">
      <span class="sure" @click="save">保存</span>
    </top-nav>
    <div class="content">
      <van-radio-group v-model="obj.sex">
        <van-cell-group>
          <van-cell title="男" clickable @click="obj.sex = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="女" clickable @click="obj.sex = '0'">
            <template #right-icon>
              <van-radio name="0" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav";
import {getuserinfo} from '../../utils/api'
export default {
  components: { topNav },
  name: "changesex",
  data() {
    return {
      obj: {
        sex: "1",
      },
    };
  },
  created() {},
  methods: {
    async save(){
      let {data} = await getuserinfo(this.obj)
      this.$router.back()
    }
  },
};
</script>

<style lang="scss" scoped>
.changesex {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 0.8rem);
  padding-top: 0.2rem;
}
.sure {
  color: blue;
  font-size: 0.28rem;
}
</style>
