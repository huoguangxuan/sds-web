<template>
  <div class="flexcc flexcol login">
    <ul class="mytab">
      <li
        v-for="(tab, index) in tabs"
        @click="() => tabClick(index)"
        :key="index"
        :class="{ active: active == index }"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="content panel">
      <div v-if="active === 0">
        <div class="scanbox">
          <div class="qrborders">
            <div v-if="qrTimeout" class="refresh-qrcode flexcc flexcol">
              <img src="@/assets/img/icon_refresh.png" alt />
              <p>点击刷新二维码</p>
            </div>
            <qrcode class="qrcode" :value="qrurl" :size="size" level="H" />
          </div>
          <img src="@/assets/ss.jpg" class="right-img" alt />
        </div>
        <p class="ac scan">
          请使用
          <span style="color:#ff7300">手机营业厅APP 扫描登录</span>
        </p>
      </div>
      <div v-else style="margin:20px 123px 0px">
        <!-- 手机号 -->
        <my-input
          type="text"
          :val.sync="mobile"
          clearable
          left-icon="mobile"
          placeholder="请输入手机号"
        />
        <!-- 密码 -->
        <my-input
          type="password"
          v-if="active == 1"
          :val.sync="password"
          clearable
          left-icon="pwd"
          right-icon="eye"
          placeholder="请输入密码"
        />
        <!-- 验证码 -->
        <my-input
          type="text"
          v-if="active == 2"
          :val.sync="sms"
          left-icon="sms"
          placeholder="请输入验证码"
        >
          <template v-slot:sms v-if="active == 2">
            <wo-button
              class="getsms"
              @touchstart="getSms"
              @click="getSms"
              inline
              type="basic"
            >
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{ count }}s重新发送</span>
            </wo-button>
          </template>
        </my-input>
        <div style="margin-top: 38px;" class="confirm">
          <wo-button @click="login">确认登录</wo-button>
        </div>
      </div>
    </div>
    <wo-dialog
      class="mydialog"
      :class="{ nocancel: !cancelText }"
      :title="dialogTitle"
      :content="dialogContent"
      :cancelText="cancelText"
      :confirmText="confirmText"
      v-model="confirmDialog"
    ></wo-dialog>
  </div>
</template>
<script>
import { Dialog, Toast, Input } from "woui-mobile";
import myInput from "@/components/Input";
import api from "@/api";
export default {
  data: function() {
    return {
      tabs: ["扫码登录", "密码登录", "短信登录"], //登录方式
      active: 0, //默认选中tab
      qrurl: "", //二维码地址
      size: 150,
      mobilePattern: /^1[3|4|5|7|8][0-9]{9}$/, //手机号校验
      passwordPattern: /^.\w{6,16}$/, //密码校验
      smsPattern: /^\d{6}$/,
      mobile: "",
      password: "",
      sms: "",
      passwordType: "password",
      eye: "closed-eye",
      count: 60,
      show: true,
      sendStatus: false,
      dialogTitle: "标题",
      confirmDialog: false,
      confirmText: "确认",
      cancelText: "",
      dialogContent: "",
      qrTimeout: false
    };
  },
  components: {
    [Dialog.name]: Dialog,
    [Input.name]: Input,
    myInput
  },
  computed: {
    mobileStatus() {
      return this.mobilePattern.test(this.mobile);
    },
    submitStatus() {
      if (this.isPasswordLogin) {
        return (
          this.mobilePattern.test(this.mobile) &&
          this.passwordPattern.test(this.password)
        );
      }
      return (
        this.mobilePattern.test(this.mobile) &&
        this.smsPattern.test(Number(this.sms))
      );
    }
  },
  methods: {
    tabClick(index) {
      this.active = index;
    },
    getSms() {
      if (!this.mobile) {
        // Toast.info("请先输入手机号");
        this.dialogContent = "请输入手机号";
        this.dialogTitle = "温馨提示";
        this.confirmDialog = true;
        return;
      }
      if (!this.mobileStatus) {
        // Toast.info("请先输入手机号");
        this.dialogContent = "请输入11位手机号";
        this.dialogTitle = "温馨提示";
        this.confirmDialog = true;
        return;
      }
      this.sendStatus = true;
      api
        .getSms(this.mobile)
        .then(res => {
          Toast.info(res.responseMSG);
          //弄个60秒倒计时
          let timer;
          let self = this;
          this.show = false;
          timer = setInterval(() => {
            self.count--;
            if (self.count < 1) {
              self.show = true;
              self.sendStatus = false;
              clearInterval(timer);
              self.count = 60;
            }
          }, 1000);
        })
        .catch();
    },
    login() {
      // 密码登录
      const params = {
        isSms: this.active == 1,
        mobile: this.mobile,
        sms: this.sms
        // password: MD5(this.password)
      };
      this.$store.dispatch("user/login", params);
    }
  }
};
</script>
<style lang="less" scoped>
.mydialog {
  /deep/ .wo-dialog__wrapper {
    width: 598px;
  }
  /deep/ .wo-dialog__title {
    font-size: 30px;
    font-weight: bold;
    padding: 40px 40px 0px;
  }
  /deep/ .wo-dialog__content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    padding: 20px 117px;
  }
  /deep/ .wo-hairline--top {
    height: 80px;
  }
  /deep/ .wo-dialog__cancel,
  /deep/ .wo-dialog__confirm {
    font-size: 26px;
    font-weight: 600;
  }
  /deep/ .wo-dialog__control {
    margin-top: 30px;
  }
}
.nocancel {
  /deep/ .wo-dialog__control {
    background: #ff7300;
  }
  /deep/ .wo-dialog__confirm {
    color: #fff;
  }
}
.getsms {
  position: absolute;
  right: 0;
  span {
    font-size: 22px;
  }
}
.confirm {
  /deep/ .wo-button {
    font-size: 26px;
    height: 66px;
  }
}

.mytab {
  font-size: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 55px 0px 44px 0px;
  li {
    margin: 0px 70px;
    &.active {
      color: #ff7300;
      position: relative;
      font-weight: 600;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 7px;
        position: absolute;
        bottom: -22px;
        background: #ff7300;
        box-shadow: 0 3px 7px 0 rgba(255, 146, 102, 0.5);
        border-radius: 3px;
        border-radius: 3px;
      }
    }
  }
}
.content {
  width: 626px;
  height: 320px;
}
.scanbox {
  margin: 25px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.login {
  height: calc(100vh);
  justify-content: start;
}
.scan {
  font-size: 28px;
  line-height: 30px;
}
.qrcode {
  width: 200px;
  width: 200px;
  /deep/ canvas {
    width: 100% !important;
    height: 100% !important;
  }
  display: inline-block;
}
.qrborders {
  padding: 10px;
  padding-bottom: 5px;
  position: relative;
}
.refresh-qrcode {
  width: 220px;
  height: 220px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  img {
    margin: 10px;
  }
  p {
    color: #fff;
    font-size: 20px;
  }
}
.right-img {
  width: 90px;
  height: 170px;
  vertical-align: bottom;
}
/deep/ input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
}
/deep/ .wo-input__wrapper {
  line-height: 50px;
}
/deep/ .wo-input__inner {
  height: 30px;
}
</style>
