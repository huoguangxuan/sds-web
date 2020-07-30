<template>
  <div class="flexcc flexcol" style="height:80vh">
    <div class="flexcc flexrow" v-if="!isQrcodeLogin" style="heihgt:170px">
      <img src="@/assets/ss.jpg" alt="" style="width:120px;margin:25px;" />
      <div>
        <p class="ac scan">
          请使用<span style="color:orange">手机营业厅app</span><br />
          扫描二维码
        </p>
        <qrcode class="qrcode" :value="value" :size="size" level="H" />
      </div>
    </div>
    <div v-else class="flexcc flexrow" style="heihgt:170px">
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="正则校验"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="validator"
          placeholder="函数校验"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="异步函数校验"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
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
      <div class="item" v-if="isPasswordLogin">
        <div
          class="circle"
          @click="
            () => {
              isPasswordLogin = false;
              isMessageLogin = true;
              isQrcodeLogin = true;
            }
          "
        >
          <van-icon name="lock" class="lock" />
        </div>
        密码登录
      </div>
      <div class="item" v-if="isMessageLogin">
        <div
          class="circle"
          @click="
            () => {
              isMessageLogin = false;
              isQrcodeLogin = true;
              isPasswordLogin = true;
            }
          "
        >
          <van-icon name="chat" class="chat" />
        </div>
        短信登录
      </div>
      <div class="item" v-if="isQrcodeLogin">
        <div
          class="circle"
          @click="
            () => {
              isQrcodeLogin = false;
              isMessageLogin = true;
              isPasswordLogin = true;
            }
          "
        >
          <van-icon name="qr" class="qr" />
        </div>
        扫码登录
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data: function() {
    return {
      user: "张三",
      value: "www.baidu.com",
      size: 150,
      isPasswordLogin: true, //密码登录
      isMessageLogin: true, //短信验证码登录
      isQrcodeLogin: false, //二维码登录
      pattern: /\d{6}/,
      value1: "",
      value2: "",
      value3: ""
    };
  },
  methods: {
    onFailed() {},
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>
<style lang="less" scoped>
.scan {
  line-height: 30px;
}
.qrcode {
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
    line-height: 28px;
  }
}
.line {
  &::before {
    content: "";
    border-bottom: 1px solid #999;
    width: 100px;
    position: relative;
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
</style>
