<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <!-- 内容区域 -->
    <div class="center">
      <p class="txtmax">话费查询</p>
      <!-- 查询明细 -->
      <div class="detail">
        <div class="phonehcarge">
          <dl>
            <dt>
              <qrcode
                :value="value"
                :size="size"
                level="H"
                style="margin:10px"
              ></qrcode>
            </dt>
            <dd>剩余话费</dd>
            <dd>100.00元</dd>
          </dl>
        </div>
        <div class="qrcode">
          <dl>
            <dt>
              <qrcode
                :value="value"
                :size="size"
                level="H"
                style="margin:10px"
              ></qrcode>
            </dt>
            <dd>扫码进入手机营业厅app了解更多信息</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "www.baidu.com",
      size: 150
    };
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.changeQuery {
  width: 100vw;
  height: 100vh;
  .center {
    padding: 25px;
    .txtmax {
      font-size: 24px;
      font-weight: bold;
    }
    .detail {
      display: flex;
      margin-top: 40px;
      justify-content: center;
    }
  }
}
.qrcode {
  width: 35%;
  height: 35%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
.phonehcarge {
  width: 35%;
  height: 35%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
</style>
