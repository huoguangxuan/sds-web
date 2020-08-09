<template>
  <div class="back" @click="$router.go(-1)">
    <wo-icon name="arrow-left" class="back-icon" size="md"></wo-icon>
    <span class="tit2">{{ title }}</span>
  </div>
</template>
<script>
import { Icon } from "woui-mobile";
export default {
  props: ["title"],
  components: {
    [Icon.name]: Icon
  }
};
</script>
<style lang="less">
.back {
  height: 85px;
  position: fixed;
  top: 0;
  line-height: 85px;
  padding-left: 30px;
  background: #f7f8f9;
  width: 100%;
  span {
    font-size: 34px;
    font-weight: 500;
  }
  &-icon {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
}
</style>
