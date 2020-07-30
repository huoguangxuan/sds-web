<template>
  <div>
    <qrcode :value="value" :size="size" level="H" style="margin:10px"></qrcode>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      user: "张三",
      value: "www.baidu.com",
      size: 150
    };
  }
};
</script>
<style lang="less" scoped></style>
