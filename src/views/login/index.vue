<template>
  <div class="flexcc flexcol login">
    <div class="flexcc flexrow" v-if="isQrcodeLogin">
      <img src="@/assets/ss.jpg" class="sanImg" alt />
      <div>
        <p class="ac scan">
          请使用
          <span style="color:orange">手机营业厅app</span>
          <br />扫描二维码
        </p>
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
      </div>
    </div>
    <div v-else class="flexcc flexrow" style="width:100%">
      <van-form validate-first @submit="login" style="width:40%">
        <!-- 手机号 -->
        <van-field
          v-model="mobile"
          name="mobile"
          type="tel"
          clearable
          placeholder="请输入手机号"
        />
        <!-- 密码 -->
        <van-field
          v-if="isPasswordLogin"
          v-model="password"
          name="password"
          :type="passwordType"
          clearable
          :right-icon="eye"
          @click-right-icon="eyeClick"
          placeholder="请输入密码"
        />
        <!-- 验证码 -->
        <van-field
          v-if="isSmsLogin"
          v-model="sms"
          clearable
          type="number"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button
              v-if="isSmsLogin"
              size="mini"
              :disabled="sendStatus"
              @touchstart="getSms"
              native-type="button"
              type="warning"
            >
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{ count }}s重新发送</span>
            </van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button
            block
            :disabled="!submitStatus"
            type="warning"
            native-type="submit"
            >授权</van-button
          >
        </div>
      </van-form>
    </div>
    <div class="flexcc flexrow">
      <p class="line">其他登录方式</p>
    </div>
    <div class="logintype">
      <div
        class="item"
        v-if="!isPasswordLogin"
        @click="
          () => {
            isPasswordLogin = true;
            isSmsLogin = false;
            isQrcodeLogin = false;
            $parent.$refs['head'].title &&
              ($parent.$refs['head'].title = '密码登录');
          }
        "
      >
        <div class="circle">
          <van-icon name="lock" class="lock" />
        </div>
        密码登录
      </div>
      <div
        class="item"
        v-if="!isQrcodeLogin"
        @click="
          () => {
            isQrcodeLogin = true;
            isSmsLogin = false;
            isPasswordLogin = false;
            $parent.$refs['head'].title &&
              ($parent.$refs['head'].title = '扫码登录');
          }
        "
      >
        <div class="circle">
          <van-icon name="qr" class="qr" />
        </div>
        扫码登录
      </div>
      <div
        class="item"
        v-if="!isSmsLogin"
        @click="
          () => {
            isSmsLogin = true;
            isQrcodeLogin = false;
            isPasswordLogin = false;
            $parent.$refs['head'].title &&
              ($parent.$refs['head'].title = '短信登录');
          }
        "
      >
        <div class="circle">
          <van-icon name="chat" class="chat" />
        </div>
        短信登录
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import api from "@/api";
export default {
  data: function() {
    return {
      user: "张三",
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
.sanImg {
  width: 120px;
  margin: 25px;
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
.logintype {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .item {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    font-size: 14px;
    line-height: 30px;
  }
}
.line {
  position: relative;
  font-size: 16px;
  &::before {
    content: "";
    border-bottom: 1px solid #999;
    width: 100px;
    position: absolute;
    left: 125px;
    top: 12px;
    display: block;
  }
  &::after {
    content: "";
    border-bottom: 1px solid #999;
    width: 100px;
    position: relative;
    right: 130px;
    top: -11px;
    display: block;
  }
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid orange;
  text-align: center;
  .lock,
  .chat,
  .qr {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: orange;
  }
}
/deep/ .van-cell::after {
  border-bottom: 1px solid #999;
}

/deep/ input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
}
</style>
