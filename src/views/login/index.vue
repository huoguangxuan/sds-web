<template>
  <el-main>
    <el-container>
      <el-row :gutter="24" class="content">
        <el-col :span="14" class="text-center">
          <h1>请扫描右侧二维码</h1>
          <h2>
            该内容需要"手机营业厅"登录授权<br />请打开手机营业厅app扫描二维码
          </h2>
        </el-col>
        <el-col :span="10">
          <qrcode
            :value="value"
            :size="size"
            level="H"
            style="margin:10px"
          ></qrcode>
        </el-col>
      </el-row>
    </el-container>
  </el-main>
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
h1 {
  font-size: 18px;
  margin: 10px;
  font-weight: 600;
}
.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.prams {
  font-size: 14px;
  margin: 10px;
}
.text-center {
  text-align: center;
}
.left {
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
</style>
