<template>
  <div class="rechargeOk">
    <div class="container">
      <img src="../../../src/assets/rechargeOk.png" alt="" />
      <p>已为手机{{ phoneNumber }}成功充值{{ PhoneBill }}元，请注意查收。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: 13930012345,
      PhoneBill: 500
    };
  }
};
</script>

<style lang="less" scoped>
.rechargeOk {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 160px;
      height: 180px;
      margin: 0 0 66px 0;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
