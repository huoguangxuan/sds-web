<template>
  <div>
    <!--头部区域-->
    <div class="base_info_head">
      <span @click="backToPrevious()">
        <wo-icon name="arrow-left" size="md" color="#ffffff"></wo-icon>
      </span>
      <span>基本信息</span>
      <!-- 顶部标题 -->
      <div class="title">
        <div class="title_body">
          <div>
            当前等级：
            <span> {{ custLvl || "一星" }}忠诚用户 </span>
            <!--icon心-->
            <img src="@/assets/images/icon_heart.png" alt />
            <!--icon星星-->
            <span v-for="item in 3" :key="item" class="icon_start">
              <img src="@/assets/images/icon_start.png" alt />
            </span>
          </div>
          <div>
            尊敬的{{ custLvl || "XXX" }}忠诚用户，您拥有的特权有，生日问候。
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="base_info">
      <div class="main_box">
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
                <span>{{ data.open_date || "2020年8月7日" }}</span>
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
                <span>{{ custLvl || "一星" }}</span>
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
  mounted() {
    this.data = {
      token: "i8as89a9200z99s99asads9xajkkflla2ll",
      package_id: "1000",
      package_name: "畅爽全国冰激凌套餐398元档",
      product_id: "15534466441",
      product_type: "无",
      status: "开通",
      cust_name: "刘备",
      cert_type: "18位身份证",
      cert_num: "140203199711250867",
      open_date: "20200730110222",
      user_head_img: "http://temp.im/300x200",
      cust_lvl: "3",
      manager_name: "曹操",
      manager_concact: "15523632635",
      land_lvl: "5",
      user_status: "无",
      pay_type: "1"
    };
    // if (this.$store.state.user.user) {
    //   this.data = JSON.parse(JSON.stringify(this.$store.state.user.user));
    // }
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
    },
    // 返回上一页
    backToPrevious() {
      return this.$router.back(-1);
    }
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
  }
};
</script>

<style lang="less" scoped>
.base_info_head {
  height: 180px;
  padding-top: 26px;
  padding-left: 37px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url("../../assets/images/bg_base_info.png");
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  & span:nth-child(2) {
    margin-left: 22px;
    font-family: PingFangSC-Semibold;
    font-size: 34px;
    color: #ffffff;
  }
  .title {
    position: relative;
    .title_body {
      line-height: 37px;
      top: 29px;
      left: 60px;
      position: absolute;
      & div:nth-child(1) {
        font-family: PingFangSC-Medium;
        font-size: 26px;
        color: #ffffff;
        display: flex;
        align-items: center;
        & span:nth-child(1) {
          margin-right: 10px;
        }
        .icon_start {
          line-height: 0;
        }
      }
      & div:nth-child(2) {
        margin-top: 8px;
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #ffffff;
        line-height: 30px;
      }
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}
.base_info {
  font-size: 20px;
  line-height: 25px;
  margin: 12px 98px 0;
  .main_box {
    .content {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      .content_left {
        width: 50%;
        display: inline-block;
        .left_title {
          line-height: 40px;
          h3 {
            margin: 0 0 15px 0;
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: #333333;
          }
        }
        .left_body {
          font-size: 20px;
          color: #333333;
          display: flex;
          flex-direction: column;
          padding: 10px 40px 0 0;
        }
      }
      .content_right {
        width: 50%;
        display: inline-block;
        border-left: 2px solid #ededed;
        .right_title {
          line-height: 40px;
          padding-left: 25px;
          h3 {
            margin: 0 0 15px 0;
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: #333333;
          }
        }
        .right_body {
          font-size: 20px;
          display: flex;
          flex-direction: column;
          padding: 10px 0 0 25px;
        }
      }
      .body_span {
        margin-bottom: 14px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #333333;
        & span:nth-child(2) {
          color: #ff6023;
          float: right;
        }
      }
    }
  }
}
</style>
