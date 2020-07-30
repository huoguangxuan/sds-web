<template>
  <div class="flexcc flexcol" style="height:80vh">
    <div class="flexcc flexrow">
      <img src="@/assets/ss.jpg" alt="" style="width:120px;margin:25px;" />
      <div>
        <p class="ac scan">
          请使用<span style="color:orange">手机营业厅app</span><br />
          扫描二维码
        </p>
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
      </div>
    </div>
    <div class="flexcc flexrow">
      <p class="line">
        其他登录方式
      </p>
    </div>
    <div class="logintype">
      <div class="item">
        <div class="circle">
          <van-icon name="lock" class="lock" />
        </div>
        密码登录
      </div>
      <div class="item">
        <div class="circle">
          <van-icon name="chat" class="chat" />
        </div>
        短信登录
      </div>
    </div>
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
<style lang="less" scoped>
.scan {
  line-height: 30px;
}
.qrcode {
  margin: 25px;
}
.logintype {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .item {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    font-size: 14px;
    line-height: 28px;
  }
}
.line {
  &::before {
    content: "";
    border-bottom: 1px solid #999;
    width: 100px;
    position: relative;
    left: 125px;
    top: 12px;
    display: block;
  }
  &::after {
    content: "";
    border-bottom: 1px solid #999;
    width: 100px;
    position: relative;
    right: 130px;
    top: -11px;
    display: block;
  }
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid orange;
  text-align: center;
  .lock,
  .chat {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: orange;
  }
}
</style>
