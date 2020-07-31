<template>
  <div class="flexcc flexcol" style="height:80vh">
    <div class="flexcc flexrow" v-if="!isQrcodeLogin">
      <img src="@/assets/ss.jpg" class="sanImg" alt="" />
      <div>
        <p class="ac scan">
          请使用<span style="color:orange">手机营业厅app</span><br />
          扫描二维码
        </p>
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
      </div>
    </div>
    <div v-else class="flexcc flexrow" style="width:100%">
      <van-form validate-first @submit="onSubmit" style="width:40%">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="mobile"
          name="mobile"
          type="tel"
          clearable
          placeholder="请输入手机号"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-if="!isPasswordLogin"
          v-model="password"
          name="password"
          :type="passwordType"
          clearable
          :right-icon="eye"
          @click-right-icon="eyeClick"
          placeholder="请输入密码"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <!-- <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        /> -->
        <div style="margin: 16px;">
          <van-button
            v-if="!isPasswordLogin"
            block
            :disabled="!submitStatus"
            type="warning"
            native-type="submit"
          >
            登录
          </van-button>
          <van-button
            v-else
            block
            type="warning"
            @click="getCode"
            :disabled="!mobileStatus"
            native-type="submit"
          >
            获取手机短信验证码
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="flexcc flexrow">
      <p class="line">
        其他登录方式
      </p>
    </div>
    <div class="logintype">
      <div
        class="item"
        v-if="isPasswordLogin"
        @click="
          () => {
            isPasswordLogin = false;
            isMessageLogin = true;
            isQrcodeLogin = true;
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
        v-if="isQrcodeLogin"
        @click="
          () => {
            isQrcodeLogin = false;
            isMessageLogin = true;
            isPasswordLogin = true;
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
        v-if="isMessageLogin"
        @click="
          () => {
            isMessageLogin = false;
            isQrcodeLogin = true;
            isPasswordLogin = true;
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
      isPasswordLogin: true, //密码登录
      isMessageLogin: true, //短信验证码登录
      isQrcodeLogin: false, //二维码登录
      mobilePattern: /^1[3|4|5|7|8][0-9]{9}$/, //手机号校验
      passwordPattern: /^.\w{6,16}$/, //密码校验
      mobile: "",
      password: "",
      vcode: "",
      passwordType: "password",
      eye: "closed-eye"
    };
  },
  computed: {
    mobileStatus() {
      return this.mobilePattern.test(this.mobile);
    },
    submitStatus() {
      return (
        this.mobilePattern.test(this.mobile) &&
        this.passwordPattern.test(this.password)
      );
    }
  },
  methods: {
    // onFailed(errorInfo) {
    //   console.log(errorInfo);
    // },
    // validator(val) {
    //   return /1\d{10}/.test(val);
    // },
    // 异步校验函数返回 Promise
    // asyncValidator(val) {
    //   return new Promise(resolve => {
    //     Toast.loading("验证中...");

    //     setTimeout(() => {
    //       Toast.clear();
    //       resolve(/\d{6}/.test(val));
    //     }, 1000);
    //   });
    // },
    getCode() {
      api
        .getCode(this.mobile)
        .then(res => {
          Toast(res.code);
        })
        .catch(err => console.log(err));
    },
    validatorMsg() {},
    onSubmit(values) {
      console.log("submit", values);
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

/deep/ input::input-placeholder {
  color: #999;
}
</style>
