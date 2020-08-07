<template>
  <div class="base_info">
    <div class="main_box">
      <!-- 顶部标题 -->
      <div class="title">
        <div class="title_body">
          <div>
            当前等级:
            <span>
              {{ custLvl || "一星" }}忠诚用户
              <van-icon
                name="star"
                v-for="item in data.cust_lvl * 1 || 1"
                :key="item"
              />
            </span>
          </div>
          <div>
            尊敬的{{ custLvl || "XXX" }}忠诚用户，您拥有的特权有，生日问候。
          </div>
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
              <span>{{ data.status || "无" }}</span>
            </div>
            <div class="body_span">
              <span>号码类型</span>
              <span>{{ data.user_status || "无" }}</span>
            </div>
            <div class="body_span">
              <span>入网时间</span>
              <span>{{ dateFormat(data.open_date) || "2020年8月7日" }}</span>
            </div>
            <div class="body_span">
              <span>通话级别</span>
              <span>{{ landLvl || "无" }}</span>
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
              <span>{{ data.cust_name || "无" }}</span>
            </div>
            <div class="body_span">
              <span>当前套餐</span>
              <span>{{ data.package_name || "无" }}</span>
            </div>
            <div class="body_span">
              <span>用户级别</span>
              <span>
                <van-icon
                  name="star"
                  v-for="item in data.cust_lvl * 1 || 1"
                  :key="item"
                />
              </span>
            </div>
            <div class="body_span">
              <span>证件类型</span>
              <span>{{ data.cert_type || "无" }}</span>
            </div>
            <div class="body_span">
              <span>证件号码</span>
              <span>{{ hidden(data.cert_num, 6, 2) || "无" }}</span>
            </div>
            <div class="body_span">
              <span>客户经理</span>
              <span>{{ data.manager_name || "无" }}</span>
            </div>
            <div class="body_span">
              <span>付费方式</span>
              <span>{{ payType || "无" }}</span>
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
      data: {},
      text: 30,
      flag: true
    };
  },
  computed: {
    // 用户星级
    custLvl: function() {
      if (this.data.cust_lvl) {
        switch (this.data.cust_lvl) {
          case "1":
            return "一星";
          case "2":
            return "二星";
          case "3":
            return "三星";
          case "4":
            return "四星";
          case "5":
            return "五星";
          default:
            return "null";
        }
      } else {
        return "null";
      }
    },
    // 通话级别
    landLvl: function() {
      if (this.data.land_lvl) {
        switch (this.data.land_lvl) {
          case "1":
            return "本地通话";
          case "2":
            return "省内通话";
          case "3":
            return "国内通话";
          case "4":
            return "港澳台通话";
          case "5":
            return "国际通话";
          case "6":
            return "其他";
          default:
            return "其他";
        }
      } else {
        return "其他";
      }
    },
    // 支付方式
    payType: function() {
      if (this.data.pay_type) {
        switch (this.data.pay_type) {
          case "1":
            return "预付费";
          case "2":
            return "后付费";
          default:
            return "其他";
        }
      } else {
        return "其他";
      }
    }
  },
  mounted() {
    if (this.$store.state.user.user) {
      this.data = JSON.parse(JSON.stringify(this.$store.state.user.user));
    }
  },
  methods: {
    // 身份证号处理  str：要进行隐藏的变量  frontLen: 前面需要保留几位    endLen: 后面需要保留几位
    hidden: function(certNum = "", frontLen, endLen) {
      let len = certNum.length - frontLen - endLen;
      let xing = "";
      for (let i = 0; i < len; i++) {
        xing += "*";
      }
      return (
        certNum.slice(0, frontLen) +
        xing +
        certNum.slice(certNum.length - endLen)
      );
    }
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
