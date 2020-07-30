<template>
  <div class="recharging">
    aa
    <qrcode class="sdd" :value="value" :size="size" level="H"></qrcode>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      value: "www.baidu.com",
      size: 200
    };
  }
};
</script>
<style lang="less" scoped>
.recharging {
  display: flex;
  justify-content: center;
  .className {
    margin-top: 22px;
  }
}
</style>
