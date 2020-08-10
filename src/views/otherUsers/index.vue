<template>
  <div>
    <!--头部区域-->
    <div class="other_users_head">
      <span @click="backToPrevious()">
        <wo-icon name="arrow-left" size="md" color="#333333"></wo-icon>
      </span>
      <span>基本信息</span>
    </div>
    <!-- 内容区域 -->
    <div class="other_users">
      <div class="center">
        <!-- 5G畅爽冰激凌 -->
        <div class="qrcode">
          <div class="main_box img1">
            <qrcode
              :value="optionA.value"
              :size="size"
              level="L"
              renderAs="svg"
            ></qrcode>
          </div>
          <p>5G畅爽冰激凌</p>
        </div>
        <!-- 5G腾讯王卡 -->
        <div class="qrcode">
          <div class="main_box img2">
            <qrcode
              :value="optionB.value"
              :size="size"
              level="L"
              renderAs="svg"
            ></qrcode>
          </div>
          <p>5G腾讯王卡</p>
        </div>
        <div></div>
      </div>
      <div class="content">
        <p>对不起，暂时只支持联通手机号码的查询业务。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 150,
      optionA: {
        value:
          "https://m.10010.com/queen/CB-currency-template/homepage.html?salesId=98X1909201558234364&channel=06-0324-1767-6763"
      },
      optionB: {
        value:
          "https://m.10010.com/queen/CB-currency-template/homepage.html?salesId=98X2004171556599537&channel=06-0324-1767-6763"
      }
    };
  },
  methods: {
    // 返回上一页
    backToPrevious() {
      return this.$router.back(-1);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.other_users_head {
  margin-top: 26px;
  margin-left: 49px;
  & span:nth-child(2) {
    margin-left: 22px;
    font-family: PingFangSC-Semibold;
    font-size: 34px;
    color: #333333;
  }
}
.other_users {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  .center {
    display: flex;
    text-align: center;
    .qrcode {
      .main_box {
        height: 282px;
        width: 377px;
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
      }
      .img1 {
        margin-right: 30px;
        background-image: url("../../assets/images/img_5G.png");
      }
      .img2 {
        background-image: url("../../assets/images/img_5G_Card.png");
      }
      /deep/ svg {
        border: 4px solid #ffffff;
        height: 92px !important;
        width: 92px !important;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      p {
        margin-top: 10px;
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        font-weight: 500;
        color: #ff6023;
      }
    }
  }
  .content {
    margin-left: 40px;
    margin-top: 40px;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #666666;
    text-align: center;
  }
}
</style>
