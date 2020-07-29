<template>
  <el-main>
    <h2>welcome请扫码登录</h2>
    <qrcode :value="value" :size="size" level="H"></qrcode>
  </el-main>
</template>
<script>
export default {
  data: function() {
    return {
      value: "www.baidu.com",
      size: 300
    };
  }
};
</script>
<style lang="less" scoped></style>
