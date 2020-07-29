<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <!-- 顶部标题 -->
    <div class="top">联通营业厅</div>
    <!-- 内容区域 -->
    <div class="center">
      <ul>
        <li>
          <p>话费查询</p>
          <button>返回</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.changeQuery {
  width: 100vw;
  height: 100vh;
  .top {
    width: 100vw;
    height: 8vh;
    border-bottom: 2px solid #ccc;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
