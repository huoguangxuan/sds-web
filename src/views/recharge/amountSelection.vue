<template>
  <div class="amountSelection">
    <div class="container">
      <h1>请说出您想要充值的金额，当前可选金额为：</h1>
      <div class="amountArea">
        <p>
          <van-button plain type="primary">30元</van-button>
          <van-button plain type="primary">20元</van-button>
          <van-button plain type="primary">50元</van-button>
          <van-button plain type="primary">100元</van-button>
        </p>
        <p>
          <van-button plain type="primary">200元</van-button>
          <van-button plain type="primary">300元</van-button>
          <van-button plain type="primary">500元</van-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.amountSelection {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 22px;
      font-weight: 400;
    }
    .amountArea {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p:first-of-type {
        margin: 20px 0 15px 0;
      }
      /deep/ button {
        margin: 0 15px;
      }
    }
  }
}
</style>
