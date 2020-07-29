<template>
  <div class="pages">
    <div class="main_box">
      <div class="main_title">
        <h3>联通营业厅</h3>
      </div>
      <div class="content">
        <div class="title">
          <h3>余量查询</h3>
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            size="small"
            @click="back"
          >
            返 回
          </el-button>
        </div>
        <!-- 流量查询结果 -->
        <div>
          <div class="content_flow">
            <span>流量</span>
            <div class="content_first">
              <span>套餐名称：xxxxxxx</span>
              <h3 v-show="flag">超出xxGB/MB</h3>
            </div>
            <!-- 限量套餐 -->
            <div class="content_second" v-show="flag">
              <span>总计：xxGB，公用：xxGB，已用：xxGB</span>
              <span>剩余xxGB/MB</span>
            </div>
            <!-- 不限量套餐 -->
            <div class="content_second" v-show="!flag">
              <span>本月已用：xxGB</span>
            </div>
          </div>
          <div class="progress_box">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="text"
              color="#909399"
            ></el-progress>
          </div>
        </div>
        <!-- 语音查询结果 -->
        <div>
          <div class="content_flow">
            <span>语音</span>
            <div>
              <span>套餐名称：xxxxxxx</span>
            </div>
            <div class="content_second">
              <span>总计：xx分钟，已用xx分钟</span>
              <span>剩余xx分钟</span>
            </div>
          </div>
          <div class="progress_box">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="text"
              color="#909399"
            ></el-progress>
          </div>
        </div>
        <!-- 短信查询结果 -->
        <div>
          <div class="content_flow">
            <span>短信</span>
            <div class="content_first">
              <span>套餐名称：xxxxxxx</span>
              <h3>超出xx条</h3>
            </div>
            <div class="content_second">
              <span>共xx条,已用xx条</span>
              <span>剩余xx条</span>
            </div>
          </div>
          <div class="progress_box">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="text"
              color="#909399"
            ></el-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 30,
      flag: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.pages {
  height: 100vh;
  font-size: 17px;
  line-height: 25px;
  position: relative;
  text-align: start;
  .main_box {
    height: 562px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: brown solid 1px;
    .main_title {
      border-bottom: 1px solid rgb(105, 103, 103);
      text-align: center;
    }
    .content {
      margin: 30px 40px 0 40px;
      .title {
        display: flex;
        justify-content: space-between;
        h3 {
          margin: 0;
        }
      }
      .content_flow {
        .content_first {
          h3 {
            float: right;
            margin: 0;
          }
        }
        .content_second {
          & span:nth-child(2) {
            float: right;
          }
        }
      }
      .progress_box {
        padding: 10px 0;
      }
    }
  }
}
</style>
