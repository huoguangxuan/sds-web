<template>
  <!-- 话费查询 -->
  <div class="changeQuery">
    <!-- 内容区域 -->
    <div class="center">
      <ul>
        <li>
          <p class="phonquiry">话费查询</p>
          <button class="back">返回</button>
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
  data () {
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
  list-style: none;
  width: 100vw;
  height: 100vh;
  .center {
    padding: 0 25px;
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
  background-color: blue;
}
</style>
