<template>
  <div class="flexcc flexcol welcome" style="height:100vh">
    <h3 class="tit2">欢迎进入</h3>
    <img class="logo" :src="logoSrc" alt="logo" />
    <h3 class="tit2">联通营业厅</h3>
    <p v-if="!(user && user.cust_name)" class="tit2">
      您还没有登录联通营业厅，请您先完成登录
    </p>
    <p v-else>
      欢迎使用联通营业厅，可以为您查余量，查话费，查信息，请对我说您想要办理的业务
    </p>
    <van-button
      v-if="!(user && user.cust_name)"
      style="margin-top:20px"
      @click="() => $router.push('/login')"
      >前往登录</van-button
    >
  </div>
</template>
<script>
// import { Dialog } from "vant";
import { mapState } from "vuex"; // createNamespacedHelpers
export default {
  data: function() {
    return {
      value: "www.baidu.com",
      size: 150,
      logoSrc: require("@/assets/logo.png"),
      show: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const params = {
        req_sec_info:
          "JB1fAUwbbcBxKDckxo2EG/03RhY71BDlZ+2My3F0yIA5CbrwA03Dh7iRCiCssg9nF7VC8XUGViY1Q0nku8anuHjx9l7uvC9j8M+Ed342EYXCqMzsPeWT1wkAINitZhPRncru82Kcvtw8DYOTptVVnUr7iJ9kG7YmAUZSoPnFeL/RflCa78uyHdx3xRTy5LOqTkZE+ym466zB6KZ96hIzpD3Epw42y9qQaIFw/bW4q1xa9XvMAgDLu6RUGGxQ34Osg9G5IDxXvJxIIzfw7W/ls6AAcNmcU5RaekbnuIKPy6l90LCGF/PHRdbQWt341wA6wykgs8vwZIdWjGbt1tOyYw==",
        req_seq: "20141111135439XXXX",
        req_sys_org_no: "ORG_NO_1",
        req_time: 20180101133254,
        service_id: "TestReq",
        sign: "string"
      };
      this.$store.dispatch("user/isLogin", params).then(() => {
        console.log(this.user);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 200px;
  padding: 10px;
  background: #ccc;
}
.welcome p {
  font-size: 24px;
}
</style>
