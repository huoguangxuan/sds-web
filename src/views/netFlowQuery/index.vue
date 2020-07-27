<template>
  <div class="pages">
    <div class="main_box">
      <div class="title">
        <span>余量查询</span>
        <el-button type="primary" icon="el-icon-arrow-left" size="small">返 回</el-button>
      </div>
      <div>
        <span>流量</span>
        <span>套餐名称：xxxxxxx</span>
      </div>
      <div class="progress_box">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="text" color="#909399"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 30
    };
  }
};
</script>

<style lang="less" scoped>
.pages {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main_box {
    height: 562px;
    width: 100%;
    border: brown solid 2px;
    .progress_box {
      padding: 10px 30px 30px 30px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      padding: 30px 40px 0 40px;
    }
  }
}
</style>