<template>
  <!-- 余量查询页 -->
  <div class="netflow">
    <!-- 主体查询内容 -->
    <div class="content">
      <ul>
        <li>
          <p class="txtmax">余量查询</p>
        </li>
        <li>
          <span class="txtmax">剩余语音</span><span class="txtmin">xx分钟</span>
        </li>
        <li>
          <span class="txtmax">剩余语音</span><span class="txtmin">xx分钟</span>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="qrcode">
        <dl>
          <dt id="qrcode"></dt>
          <dd>扫码进入手机</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    qrcode() {
      let qrcode = new QrcodeVue("qrcode", {
        width: 100,
        height: 100, // 高度
        text: "56663159", // 二维码内容
        colorDark: "#f0f", //前景色
        colorLight: "#ff0", //背景色
        correctLevel: QrcodeVue.CorrectLevel.L //容错等级
      });
    }
  },
  mounted() {
    this.qrcode();
  }
};
</script>

<style lang="less" scoped>
.netflow {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
.content {
  height: 50vh;
  padding: 0 25px;
  ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 16px;
  }
  .txtmax {
    font-size: 20px;
    font-weight: bold;
  }
  .txtmin {
    font-size: 14px;
  }
}
.bottom {
  height: 50vh;
  padding: 25px;
  .qrcode {
    position: relative;
    right: 0;
  }
}
</style>
