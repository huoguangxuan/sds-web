<template>
  <div class="user-center flexcc">
    <van-cell class="user">
      <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>{{ this.newStr }}</span>
    </van-cell>
    <van-cell is-link size="large">用户隐私政策</van-cell>
    <van-cell is-link size="large">用户服务协议</van-cell>
    <van-cell @click="logout" size="large">退出登录</van-cell>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex"; // createNamespacedHelpers
export default {
  data() {
    return {
      username: "迪丽热巴",
      newStr: ""
    };
  },
  computed: {
    ...mapState({
      loading: state => state["@@loading"],
      token: state => state
    })
  },
  mounted() {
    //console.log(this.token);
    this.usname();
    console.log(this.newStr);
  },
  methods: {
    ...mapMutations({
      logout: "user/LOGOUT"
    }),
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
.user-center {
  height: calc(100vh - 60px);
}
.flexcc {
  display: flex;
  flex-direction: column;
  .user {
    height: 200px;
    text-align: center;
    span {
      display: inline-block;
      margin-bottom: 16px;
      margin-left: 30px;
      line-height: 100%;
      font-size: 36px;
      font-weight: 900;
      color: black;
      vertical-align: bottom;
    }
    .van-image {
      vertical-align: bottom;
      width: 150px;
      height: 150px;
    }
  }
}
.van-cell {
  border-bottom: 1px solid black;
  font-size: 26px;
  padding: 26px 60px;
}
.van-cell__value--alone {
  color: #999;
  font-weight: bold;
}
</style>
