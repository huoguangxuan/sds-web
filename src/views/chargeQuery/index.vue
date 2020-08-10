<template>
  <!-- 话费查询页 -->
  <div class="chargequery">
    <!-- 头部 -->
    <div class="title">
      <label @click="back">
        <img src="../../assets/icon_back.png" />
        <span class="spantitle">话费查询</span>
      </label>
    </div>
    <p class="residue">剩余话费</p>
    <p class="money">
      <span class="moneyNumber">{{ num | NumFormat }}</span> 元
    </p>
    <p class="more">扫码进入手机营业厅App了解更多信息 →</p>
    <div class="qrcode">
      <qrcode :value="value"
              :size="size"
              level="H"
              style="margin:10px"></qrcode>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: "www.baidu.com",
      size: 78,
      voiceadd: "",
      flowadd: "",
      num: 2645
    };
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  },
  filters: {
    NumFormat: function (value) {
      if (!value) return "0.00";
      value = value.toFixed(2);
      var intPart = Number(value).toFixed(0); // 获取整数部分
      var intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); // 将整数部分逢三一断
      var floatPart = ".00"; // 预定义小数部分
      var value2Array = value.split(".");
      // =2表示数据有小数位
      if (value2Array.length === 2) {
        floatPart = value2Array[1].toString(); // 拿到小数部分
        if (floatPart.length === 1) {
          // 补0,实际上用不着
          return intPartFormat + "." + floatPart + "0";
        } else {
          return intPartFormat + "." + floatPart;
        }
      } else {
        return intPartFormat + floatPart;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.chargequery {
  background-image: url("../../assets/icon_chargeQuery.png");
  background-size: 800px 450px;
  background-repeat: no-repeat;
  background-position: 50% 75%;
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
  .residue {
    font-size: 30px;
    color: #666666;
    position: absolute;
    left: 190px;
    top: 120px;
  }
  .money {
    font-size: 30px;
    color: #666666;
    position: absolute;
    left: 190px;
    top: 170px;
  }
  .moneyNumber {
    font-size: 76px;
    font-weight: bold;
    color: #24243a;
  }
  .more {
    font-size: 18px;
    position: absolute;
    left: 390px;
    top: 400px;
    color: #666666;
  }
  .qrcode {
    position: absolute;
    left: 726px;
    top: 366px;
  }
}
</style>
