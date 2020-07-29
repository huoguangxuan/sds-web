<template>
  <div id="app">
    <!-- 公共头部 -->
    <public-heade></public-heade>
    <!-- 内容区域 -->
    <div class="contentArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PublicHeade from "./components/publichead";
export default {
  components: {
    PublicHeade
  }
};
</script>

<style lang="less"></style>
