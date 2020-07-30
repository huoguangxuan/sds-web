<template>
  <div
    style="display:flex;justify-content:center;align-items:center;height:70vh"
  >
    <div class="text-center">
      <qrcode
        :value="value"
        :size="size"
        level="H"
        style="margin:10px"
      ></qrcode>
      <h2>话费查询</h2>
    </div>
    <div class="text-center">
      <qrcode
        :value="value"
        :size="size"
        level="H"
        style="margin:10px"
      ></qrcode>
      <h2>余量查询</h2>
    </div>
    <div class="text-center">
      <qrcode
        :value="value"
        :size="size"
        level="H"
        style="margin:10px"
      ></qrcode>
      <h2>话费充值</h2>
    </div>
    <div class="text-center">
      <qrcode
        :value="value"
        :size="size"
        level="H"
        style="margin:10px"
      ></qrcode>
      <h2>基本信息</h2>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      user: "张三",
      value: "www.baidu.com",
      size: 120
    };
  }
};
</script>
<style lang="less">
.text-center {
  text-align: center;
}
</style>
