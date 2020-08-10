<template>
  <div class="user">
    <!-- 头部 -->
    <div class="title">
      <label @click="back">
        <img src="../../assets/icon_back.png" />
        <span class="spantitle">个人中心</span>
      </label>
      <span class="backlogin" @click="logout">退出登录</span>
    </div>
    <!-- 内容信息 -->
    <div class="userin">
      <div class="name">
        <img src="../../assets/icon_tou.png" />
        <span>{{ newStr }}</span>
      </div>
      <wo-cell-group>
        <wo-cell
          title="清除缓存"
          arrow
          desc="50.00MB"
          @click="demo3 = true"
        ></wo-cell>
        <wo-dialog
          title="温馨提示"
          content="确定要清理缓存？"
          confirmText="确定"
          v-model="demo3"
        >
        </wo-dialog>
        <wo-cell title="用户隐私政策" arrow></wo-cell>
        <wo-cell title="用户服务协议" arrow></wo-cell>
      </wo-cell-group>
      <wo-cell title="版本介绍" arrow></wo-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "迪丽热巴",
      newStr: "",
      demo3: false
    };
  },
  computed: {},
  mounted() {
    this.usname();
    console.log(this.newStr);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    logout() {
      this.$router.push("/login");
    },
    usname() {
      if (this.username.length === 2) {
        this.newStr = this.username.substr(0, 1) + "*";
      } else if (this.username.length > 2) {
        let char = "";
        for (let i = 0, len = this.username.length - 2; i < len; i++) {
          char += "*";
        }
        this.newStr =
          this.username.substr(0, 1) + char + this.username.substr(-1, 1);
      } else {
        this.newStr = this.username;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.user {
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
  .title {
    .spantitle {
      position: absolute;
      top: 4.3%;
      left: 9.5%;
      font-size: 34px;
      color: #333;
      font-family: PingFangSC-Semibold;
    }
    width: 100vw;
    height: 15.8%;
    img {
      position: absolute;
      top: 6%;
      left: 4.8%;
    }
    .backlogin {
      position: absolute;
      top: 5.3%;
      right: 5.2%;
      font-family: PingFangSC-Medium;
      font-size: 26px;
      color: #ff7300;
      width: 104px;
      height: 37px;
    }
  }
  .userin {
    width: 90%;
    height: 75.7%;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 22px 55px 0 rgba(0, 0, 0, 0.07);
    margin-left: 51px;
    .wo-cell {
      padding: 0;
      min-height: 76px;
      padding-left: 42px;
    }
    /deep/.wo-cell__desc {
      margin-right: 42px;
    }
    /deep/ .wo-cell__title {
      font-size: 26px;
    }
    /deep/ .wo-cell__desc {
      font-family: PingFangSC-Regular;
      font-size: 26px;
      color: #333333;
      text-align: right;
    }
    /deep/ .wo-dialog__wrapper {
      background: #ffffff;
      border-radius: 10px;
      width: 600px;
      height: 270px;
    }
    /deep/ .wo-dialog__title {
      font-family: PingFangSC-Medium;
      font-size: 30px;
      color: #333333;
      padding-top: 40px;
    }
    /deep/ .wo-dialog__content {
      font-family: PingFangSC-Regular;
      font-size: 26px;
      color: #666666;
      text-align: center;
      padding-top: 20px;
      padding-bottom: 50px;
    }
    /deep/ .wo-dialog__control {
      margin-top: 0px;
      height: 80px;
      font-size: 26px;
    }
    /deep/.wo-dialog__cancel {
      font-family: SourceHanSansCN-Medium;
      font-size: 26px;
      color: #999999;
      letter-spacing: 0;
      text-align: center;
    }
    /deep/.wo-dialog__confirm {
      font-size: 26px;
      color: #ff7300;
    }
    .name {
      width: 100%;
      height: 26%;
      img {
        width: 78px;
        height: 76px;
        padding-top: 22px;
        padding-left: 45px;
      }
      span {
        position: absolute;
        left: 210px;
        top: 134px;
        font-size: 34px;
        font-weight: bold;
      }
    }
  }
}
</style>
