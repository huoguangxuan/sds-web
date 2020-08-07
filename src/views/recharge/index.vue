<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <div class="container">
      <p>请问您是要给手机{{ phoneNumber }}充值吗？</p>
      <p>
        如果是，请说“<router-link :to="{ name: 'amount-selection' }"
          >确认</router-link
        >”。
      </p>
      <p>如果不是，请您说出需要充值的手机号码。</p>
      <wo-button>默认按钮</wo-button>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      phoneNumber: null
    };
  },
  mounted() {
    this.recharge1();
  },
  methods: {
    async recharge1() {
      let rechargeConfig = {
        mobile: this.phoneNumber
      };
      let res = await api.recharge(rechargeConfig);
      if (res.responseCode === "00001") {
        console.log(res);
      } else {
        alert("❌不行，真的不行了");
      }
    }
  }
};
// api
//   .recharge(rechargeConfig)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
</script>

<style lang="less" scoped>
.changeQuery {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  .container {
    height: 100%;
    p:first-of-type {
      margin: 0 0 22px 0;
      font-size: 18px;
    }
  }
}
</style>
