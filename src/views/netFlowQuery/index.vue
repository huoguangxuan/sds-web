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
</template>

<script>
export default {
  data() {
    return {
      value: "www.baidu.com",
      size: 100
    };
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
    margin: 16px 20px;
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
  display: flex;
  flex-direction: row-reverse;
  .qrcode {
    width: 190px;
    height: 170px;
    text-align: center;
  }
}
</style>
