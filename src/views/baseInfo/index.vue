<template>
  <div class="base_info">
    <div class="main_box">
      <!-- 顶部标题 -->
      <div class="title">
        <div class="title_body">
          <div>
            当前等级:
            <span>
              一星忠诚用户
              <van-icon name="star" v-for="item in startNum" :key="item" />
            </span>
          </div>
          <div>尊敬的一星忠诚用户，您拥有的特权有，生日问候。</div>
        </div>
      </div>
      <!-- 下方内容 -->
      <div class="content">
        <!-- 号码信息内容区域 -->
        <div class="content_left">
          <div class="left_title">
            <h3>号码信息</h3>
          </div>
          <div class="left_body">
            <div class="body_span">
              <span>当前状态</span>
              <span>开通</span>
            </div>
            <div class="body_span">
              <span>号码类型</span>
              <span>无</span>
            </div>
            <div class="body_span">
              <span>入网时间</span>
              <span>2013年02月03日</span>
            </div>
            <div class="body_span">
              <span>通话级别</span>
              <span>国际通话</span>
            </div>
          </div>
        </div>
        <!-- 个人基础信息内容区域 -->
        <div class="content_right">
          <div class="right_title">
            <h3>个人基础信息</h3>
          </div>
          <div class="right_body">
            <div class="body_span">
              <span>用户姓名</span>
              <span>刘备</span>
            </div>
            <div class="body_span">
              <span>当前套餐</span>
              <span>畅爽全国冰激凌套餐398元档</span>
            </div>
            <div class="body_span">
              <span>用户级别</span>
              <span>
                <van-icon name="star" v-for="item in startNum" :key="item" />
              </span>
            </div>
            <div class="body_span">
              <span>证件类型</span>
              <span>18位身份证</span>
            </div>
            <div class="body_span">
              <span>证件号码</span>
              <span>342623**********92</span>
            </div>
            <div class="body_span">
              <span>客户经理</span>
              <span>无</span>
            </div>
            <div class="body_span">
              <span>付费方式</span>
              <span>现金</span>
            </div>
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
      flag: true,
      startNum: 3
    };
  }
};
</script>

<style lang="less" scoped>
.base_info {
  height: 80vh;
  font-size: 17px;
  line-height: 25px;
  text-align: start;
  .main_box {
    width: 100%;
    .title {
      height: 90px;
      position: relative;
      border-top: 1px #666666 solid;
      .title_body {
        top: 15px;
        left: 40px;
        font-size: 17px;
        line-height: 28px;
        position: absolute;
        span {
          background-color: #c8903f;
          padding: 5px 10px;
          border-radius: 15px;
          color: white;
          i {
            color: #edbd2f;
          }
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      .content_left {
        width: 50%;
        display: inline-block;
        .left_title {
          height: 40px;
          line-height: 40px;
          border: #666666 1px solid;
          border-right: none;
          padding-left: 40px;
          h3 {
            font-size: 19px;
          }
        }
        .left_body {
          height: 100%;
          border: #666666 1px solid;
          border-top: none;
          border-right: none;
          font-size: 15px;
          line-height: 35px;
          display: flex;
          flex-direction: column;
          padding: 10px 40px 10px 40px;
        }
      }
      .content_right {
        width: 50%;
        display: inline-block;
        .right_title {
          height: 40px;
          line-height: 40px;
          border: #666666 1px solid;
          padding-left: 40px;
          h3 {
            font-size: 19px;
          }
        }
        .right_body {
          height: 100%;
          border: #666666 1px solid;
          border-top: none;
          font-size: 15px;
          line-height: 35px;
          display: flex;
          flex-direction: column;
          padding: 10px 40px 10px 40px;
        }
      }
      .body_span {
        & span:nth-child(2) {
          float: right;
        }
        i {
          font-size: 27px;
          color: #edbd2f;
        }
      }
    }
  }
}
</style>
