<template>
  <!-- 余量查询 -->
  <div class="netFlow">
    <!-- 头部 -->
    <div class="title">
      <label @click="back">
        <img src="../../assets/icon_back.png" />
        <span class="spantitle">余量查询</span>
      </label>
    </div>
    <!-- 内容 -->
    <div class="content">
      <p class="flow">
        <span class="one">已用流量</span><span class="two">18GB\MB</span>
      </p>
      <!-- 流量进度条 -->
      <div class="progressContainer">
        <div class="progress" :style="{ width: progressflow + '%' }">
          <b>{{ progressflow }}%</b>
        </div>
      </div>
      <p class="phone">
        <span class="one">剩余语音</span><span class="two">200分钟</span>
      </p>
      <!-- 语音进度条 -->
      <div class="progressContainer">
        <div class="progress" :style="{ width: progressphone + '%' }">
          <b>{{ progressphone }}%</b>
        </div>
      </div>
      <p class="more">扫码进入手机营业厅App了解更多信息 →</p>
      <div class="qrcode">
        <qrcode
          :value="value"
          :size="size"
          level="H"
          style="margin:10px"
        ></qrcode>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "www.baidu.com",
      size: 78,
      progressflow: 60,
      progressphone: 30
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.netFlow {
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  .title {
    .spantitle {
      position: absolute;
      top: 4.3%;
      left: 9.5%;
      font-size: 34px;
      color: #333;
      font-family: PingFangSC-Semibold;
    }
    width: 100vw;
    height: 15.8%;
    img {
      position: absolute;
      top: 6%;
      left: 4.8%;
    }
  }
  .content {
    background-color: white;
    width: 73.7%;
    height: 65.8%;
    border-radius: 20px;
    position: absolute;
    left: 14%;
    top: 19%;
    p {
      width: 600px;
      height: 44px;
      font-family: PingFangSC-Regular;
      font-size: 30.8px;
      color: #666666;
      display: flex;
      justify-content: space-between;
      margin-left: 60px;
      margin-right: 50px;
    }
    .more {
      font-size: 18px;
      position: absolute;
      left: 180px;
      top: 308px;
      color: #666666;
    }
    .qrcode {
      position: absolute;
      left: 577px;
      bottom: 12px;
    }
  }
  div.progressContainer {
    height: 20px;
    width: 86%;
    border-radius: 10px;
    background-color: #ddd;
    margin-left: 8%;
  }
  div.progress {
    background-color: #ff7300;
    border-radius: 10px;
    height: 20px;
    line-height: 20px;
  }
  b {
    color: #fff;
    font-weight: 100;
    font-size: 12px;
    position: absolute;
    left: 40%;
  }
}
</style>
