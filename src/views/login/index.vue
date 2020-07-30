<template>
  <div class="flexcc flexrow" style="height:80vh">
    <img src="@/assets/ss.jpg" alt="" style="width:10%" />
    <div>
      <p class="ac">
        请使用<span style="color:orange">手机营业厅app</span><br />
        扫描二维码
      </p>
      <qrcode :value="value" :size="size" level="H" />
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
<style lang="less" scoped></style>
