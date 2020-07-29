<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <!-- 顶部标题 -->
    <div class="top">联通营业厅</div>
    <!-- 内容区域 -->
    <div class="center">
      <ul>
        <li>
          <p class="phonquiry">话费查询</p>
          <el-button type="primary" class="back">返回</el-button>
        </li>
        <li>
          <p>账户可用金额</p>
          <p>xx元</p>
        </li>
        <li>
          <p>自由金额</p>
          <p>xx元</p>
        </li>
        <li>
          <p>定向金额</p>
          <p>xx元</p>
        </li>
        <li>
          <p>未结话费</p>
          <p>xx元</p>
        </li>
        <li>
          <p>实时金额</p>
          <p>xx元</p>
        </li>
        <li>
          <p>结转欠费</p>
          <p>xx元</p>
        </li>
        <li>
          <p>未使用定向金额</p>
          <p>xx元</p>
        </li>
        <li>
          <p>账户冻结金额</p>
          <p>xx元</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.changeQuery {
  list-style: none;
  width: 100vw;
  height: 100vh;
  .top {
    width: 100vw;
    height: 8vh;
    border-bottom: 2px solid #ccc;
    box-sizing: border-box;
    text-align: center;
  }
  .center {
    ul li {
      margin: 16px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.phonquiry {
  font-size: 20px;
  font-weight: bold;
}
.back {
  color: white;
  width: 80px;
  height: 30px;
}
</style>
