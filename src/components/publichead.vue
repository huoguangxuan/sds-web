<template>
  <div class="publichead">
    <img @click="backToPrevious()" src="../../src/assets/back.png" alt="" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 判断路由元信息
    title() {
      return this.$route.meta.title ? this.$route.meta.title : "联通营业厅";
    }
  },
  methods: {
    // 返回上一页
    backToPrevious() {
      return this.$router.back(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.publichead {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: rgb(211, 112, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    left: 16px;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  span {
    color: #fff;
    font-size: 18px;
  }
}
</style>
