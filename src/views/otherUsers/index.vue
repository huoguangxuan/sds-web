<template>
  <div class="otherUsers">
    <!-- 内容区域 -->
    <div class="center">
      <qrcode :value="value" :size="size" level="H" style="margin:10px"></qrcode>
      <p>对不起，暂时只支持联通手机号码的查询业务</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "www.baidu.com",
      size: 150,
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
    };
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.otherUsers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>
