<template>
  <el-main>
    <h2>欢迎进入</h2>
    <img :src="logoSrc" alt="logo" style="width:20px;" />
    <qrcode :value="value" :size="size" level="H" style="margin:10px"></qrcode>
    <h2>联通营业厅</h2>
    <p v-if="!user" class="prams">
      您还没有登录联通营业厅，请您先扫描二维码完成授权
    </p>
    <p v-if="user" class="prams">
      欢迎使用联通营业厅，可以为您查余量，查话费，查信息，请对我说您想要办理的业务
    </p>
  </el-main>
</template>
<script>
export default {
  data: function() {
    return {
      user: "张三",
      value: "www.baidu.com",
      size: 150,
      logoSrc: require("../../assets/back.png")
    };
  }
};</script>
<style lang="less" scoped>
.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.prams {
  font-size: 14px;
  margin: 10px;
}
</style>
