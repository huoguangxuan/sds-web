<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <p>请问您是要给手机{{ phoneNumber }}充值吗？</p>
    <p>
      如果是，请说“<router-link :to="{ name: 'amount-selection' }"
        >确认</router-link
      >”。
    </p>
    <p>如果不是，请您说出需要充值的手机号码。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: 18612341234
    };
  }
};
</script>

<style lang="less" scoped></style>
