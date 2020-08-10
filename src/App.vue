<template>
  <div id="app">
    <!-- 公共头部 -->
    <!-- <public-head ref="head"></public-head> -->
    <!-- 内容区域 -->
    <div class="contentArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PublicHead from "./components/publichead";
export default {
  components: {
    PublicHead
  }
};
</script>
<style lang="less" scoped></style>
