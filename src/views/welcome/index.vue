<template>
  <div class="flexcc flexcol" style="height:100vh">
    <h3 class="tit2">欢迎进入</h3>
    <img class="logo" :src="logoSrc" alt="logo" />
    <h3 class="tit2">联通营业厅</h3>
    <p v-if="!user">
      您还没有登录联通营业厅，请您先扫描二维码完成授权
    </p>
    <p v-else>
      欢迎使用联通营业厅，可以为您查余量，查话费，查信息，请对我说您想要办理的业务
    </p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      user: "",
      value: "www.baidu.com",
      size: 150,
      logoSrc: require("@/assets/logo.png")
    };
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 200px;
  padding: 10px;
  background: #ccc;
}
</style>
