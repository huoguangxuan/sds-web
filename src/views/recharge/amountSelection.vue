<template>
  <div class="amountSelection">
    <div class="container">
      <h1>请说出您想要充值的金额，当前可选金额为：</h1>
      <!-- <van-button type="primary">主要按钮</van-button> -->
    </div>
  </div>
</template>

<script>
// import { Button } from "vant";
export default {};
</script>

<style lang="less" scoped>
.amountSelection {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    align-items: center;
    h1 {
      font-size: 26px;
      font-weight: 400;
    }
  }
}
</style>
