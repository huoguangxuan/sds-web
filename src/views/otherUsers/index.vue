<template>
  <div class="otherUsers">
    <!-- 顶部标题 -->
    <div class="top">联通营业厅</div>
    <!-- 内容区域 -->
    <div class="center">
      <div v-qr="options" v-if="options"></div>
      <p>正在为手机充值话费</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        text: "二维码",
        render: "canvas",
        width: 256,
        height: 256,
        typeNumber: -1,
        correctLevel: 2,
        background: "#fff",
        foreground: "#000"
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.otherUsers {
  width: 100vw;
  height: 100vh;
  .top {
    width: 100vw;
    height: 8vh;
    border-bottom: 2px solid #ccc;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
