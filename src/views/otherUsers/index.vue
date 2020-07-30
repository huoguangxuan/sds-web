<template>
  <div class="otherUsers">
    <!-- 内容区域 -->
    <div class="center">
      <!-- 软件A -->
      <div class="qrcode">
        <qrcode
          :value="optionA.value"
          :size="size"
          level="Q"
          renderAs="svg"
        ></qrcode>
        <p>软件A名称</p>
      </div>
      <!-- 软件B -->
      <div class="qrcode">
        <qrcode
          :value="optionB.value"
          :size="size"
          level="Q"
          renderAs="svg"
        ></qrcode>
        <p>软件B名称</p>
      </div>
    </div>
    <div class="content">
      <p>对不起，暂时只支持联通手机号码的查询业务</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 150,
      optionA: {
        value: "https://www.baidu.com"
      },
      optionB: {
        value: "http://www.10010.com/"
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
  .center {
    display: flex;
    text-align: center;
    .qrcode {
      width: 300px;
      height: 260px;
    }
  }
  .content {
    font-size: 25px;
  }
}
</style>
