<template>
  <div class="flexcc flexcol login">
    <wo-tabs v-model="active" :activeIndex="active" :data="tabs"> </wo-tabs>
    <div class="content panel">
      <div v-if="active === 0">
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
        <p class="ac scan ">
          请使用
          <span style="color:orange">手机营业厅app</span>扫描二维码
        </p>
      </div>
      <div v-else class="flexcc flexrow">
        <wo-form validate-first @submit="login" style="width:40%">
          <!-- 手机号 -->
          <wo-field
            v-model="mobile"
            name="mobile"
            type="tel"
            clearable
            placeholder="请输入手机号"
          />
          <!-- 密码 -->
          <wo-field
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
          <wo-field
            v-if="isSmsLogin"
            v-model="sms"
            clearable
            type="number"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <wo-button
                v-if="isSmsLogin"
                size="mini"
                :disabled="sendStatus"
                @touchstart="getSms"
                native-type="button"
                type="warning"
              >
                <span v-show="show">获取验证码</span>
                <span v-show="!show" class="count">{{ count }}s重新发送</span>
              </wo-button>
            </template>
          </wo-field>
          <div style="margin: 16px;">
            <wo-button
              block
              :disabled="!submitStatus"
              type="warning"
              native-type="submit"
              >授权</wo-button
            >
          </div>
        </wo-form>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Tabs } from "woui-mobile";
import api from "@/api";
export default {
  data: function() {
    return {
      tabs: [
        {
          title: "扫码登录",
          content: ""
        },
        {
          title: "密码登录",
          content: ""
        },
        {
          title: "短信登录",
          content: ""
        }
      ],
      active: 0,
      value: "www.baidu.com",
      size: 150,
      isPasswordLogin: false, //密码登录
      isSmsLogin: false, //短信验证码登录
      isQrcodeLogin: true, //二维码登录
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
      sendStatus: false
    };
  },
  components: {
    [Tabs.name]: Tabs
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
  watch: {
    isQrcodeLogin(newVal) {
      if (newVal) {
        // open
        console.log("open");
      } else {
        // close
        console.log("close");
      }
    }
  },
  created() {
    this.$parent.$refs["head"].title &&
      (this.$parent.$refs["head"].title = "扫码登录");
  },
  methods: {
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
        isSms: this.isSmsLogin,
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
.login {
  height: calc(100vh - 60px);
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
/deep/ .wo-cell::after {
  border-bottom: 1px solid #999;
}

/deep/ input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
}
/deep/.wo-tab {
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
}
/deep/ .wo-tabs__nav {
  background: transparent;
}
.content {
  height: 40vh;
  width: 60vw;
  margin-top: 30px;
}
/deep/ .wo-tabs__line {
  height: 5px;
  bottom: 5px;
}
</style>
