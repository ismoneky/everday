<template>
  <div class="changesex">
    <top-nav title="修改性别"></top-nav>
    <div class="content">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="男" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell title="女" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav";
export default {
  components: { topNav },
  name: "changesex",
  data() {
    return {
      radio:'1'
    };
  },
  created() {},
  methods: {},
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
</style>
