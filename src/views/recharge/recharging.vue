<template>
  <div class="recharging">
    <div class="container">
      <qrcode class="qrcode" :value="value" level="H"></qrcode>
      <p>正在为手机{{ phoneNumber }}充值话费{{ PhoneBill }}元</p>
      <p>
        您的手机充值信息已发送到您的手机，请点击短信链接交费或使用手机扫描屏幕上方的二维码完成支付
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      phoneNumber: 13930012345,
      PhoneBill: 500,
      value: "https://www.baidu.com"
      // size: 200
    };
  }
};
</script>
<style lang="less" scoped>
.recharging {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .qrcode {
      width: 200px;
      height: 200px;
      /deep/ canvas {
        width: 100% !important;
        height: 100% !important;
      }
    }
    p:first-of-type {
      margin: 15px 0 14px 0;
      font-size: 22px;
    }
    p:last-of-type {
      font-size: 16px;
      width: 416px;
      text-align: center;
    }
  }
}
</style>
