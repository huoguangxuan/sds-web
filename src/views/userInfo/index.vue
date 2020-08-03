<template>
  <div class="user-center flexcc">
    <h3 class="tit">{username}</h3>
    <van-button type="warning" @click="logout">退出登录</van-button>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex"; // createNamespacedHelpers
export default {
  data() {
    return {
      username: "张三"
    };
  },
  computed: {
    ...mapState({
      loading: state => state["@@loading"],
      token: state => state
    })
  },
  mounted() {
    console.log(this.token);
  },
  methods: {
    ...mapMutations({
      logout: "user/LOGOUT"
    })
  }
};
</script>
<style lang="less" scoped>
.user-center {
  height: calc(100vh - 60px);
  font-size: 24px;
}
</style>
