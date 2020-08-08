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
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
        <p class="ac scan ">
          请使用
          <span style="color:orange">手机营业厅app</span>扫描二维码
        </p>
      </div>
      <div v-else>
        <!-- 手机号 -->
        <input type="text" v-model="mobile" placeholder="请输入手机号" />
        <wo-input
          v-model="mobile"
          name="mobile"
          type="tel"
          clearable
          placeholder="请输入手机号"
        />
        <!-- 密码 -->
        <wo-input
          v-if="active === 1"
          v-model="password"
          name="password"
          :type="passwordType"
          clearable
          :right-icon="eye"
          @click-right-icon="eyeClick"
          placeholder="请输入密码"
        />
        <!-- 验证码 -->
        <wo-input
          v-if="active == 1"
          v-model="sms"
          clearable
          type="number"
          placeholder="请输入短信验证码"
        >
        </wo-input>
        <wo-button
          v-if="active == 1"
          size="mini"
          :disabled="sendStatus"
          @touchstart="getSms"
          native-type="button"
          type="warning"
        >
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{ count }}s重新发送</span>
        </wo-button>
        <div style="margin: 16px;">
          <wo-button
            block
            :disabled="!submitStatus"
            type="warning"
            native-type="submit"
            >授权</wo-button
          >
        </div>
      </div>
    </div>
    <wo-dialog
      title="标题"
      content="内容内容内容内容内容内容内容内容内容内容内容内容"
      v-model="demo1"
    >
    </wo-dialog>
  </div>
</template>
<script>
import { Dialog, Toast, Input } from "woui-mobile";
import api from "@/api";
export default {
  data: function() {
    return {
      tabs: ["扫码登录", "密码登录", "短信登录"],
      active: 0,
      value: "www.baidu.com",
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
      demo1: false
    };
  },
  components: {
    [Dialog.name]: Dialog,
    [Input.name]: Input
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
  mounted() {},
  methods: {
    tabClick(index) {
      this.active = index;
      console.log(index);
    },
    getSms() {
      if (!this.mobileStatus) {
        Toast("请先输入手机号");
        return;
      }
      this.sendStatus = true;
      api
        .getSms(this.mobile)
        .then(res => {
          Toast(res.responseMSG);
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
        .catch(err => {
          Toast(`${err},请稍后重新发送验证码！`);
        });
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
    },
    eyeClick() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
        this.eye = "eye-o";
      } else {
        this.passwordType = "password";
        this.eye = "closed-eye";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.mytab {
  font-size: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 40px;
  text-align: center;
  li {
    margin: 20px 76px;
    &.active {
      color: #ff7300;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 7px;
        position: absolute;
        bottom: -12px;
        background: #ff7300;
        box-shadow: 0 3px 7px 0 rgba(255, 146, 102, 0.5);
        border-radius: 3px;
        border-radius: 3px;
      }
    }
  }
}
.content {
  width: 80%;
}
.login {
  height: calc(100vh);
}
.scan {
  font-size: 20px;
  line-height: 30px;
}
.qrcode {
  width: 150px;
  width: 150px;
  /deep/ canvas {
    width: 100% !important;
    height: 100% !important;
  }

  margin: 25px;
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
