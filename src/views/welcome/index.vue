<template>
  <div class="flexcc flexcol welcome" style="height:100vh">
    <h3 class="tit2">欢迎进入</h3>
    <img class="logo" :src="logoSrc" alt="logo" />
    <h3 class="tit2">联通营业厅</h3>
    <p v-if="!user" class="tit2">您还没有登录联通营业厅，请您先完成登录</p>
    <p v-else>
      欢迎使用联通营业厅，可以为您查余量，查话费，查信息，请对我说您想要办理的业务
    </p>
    <van-button
      v-if="!user"
      style="margin-top:20px"
      @click="() => $router.push('/login')"
      >前往登录</van-button
    >
  </div>
</template>
<script>
// import { Dialog } from "vant";
export default {
  data: function() {
    return {
      user: "",
      value: "www.baidu.com",
      size: 150,
      logoSrc: require("@/assets/logo.png"),
      show: false
    };
  },
  created() {
    this.getUserInfo();
  },
  mounted() {
    // Dialog.confirm({
    //   title: "标题",
    //   message: "弹窗内容"
    // })
    //   .then(() => {
    //     // on confirm
    //   })
    //   .catch(() => {
    //     // on cancel
    //   });
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch("user/isLogin", "22:19:ac:18:24");
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 200px;
  padding: 10px;
  background: #ccc;
}
.welcome p {
  font-size: 24px;
}
</style>
