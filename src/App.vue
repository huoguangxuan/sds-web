<template>
  <div id="app">
    <!-- 公共头部 -->
    <public-head ref="head"></public-head>
    <transition :name="$store.state.direction">
      <!-- 内容区域 -->
      <router-view></router-view>
    </transition>
    <!--<div class="contentArea">-->
    <!--  <router-view></router-view>-->
    <!--</div>-->
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
