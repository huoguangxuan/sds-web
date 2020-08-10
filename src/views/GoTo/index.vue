
<template>
  <div class="wrap">
    <!-- 头部logo -->
    <div class="logo">
      <img src="../../assets/xiaoziren.png" alt />
    </div>
    <div class="welcome">欢迎使用联通智能终端营业厅</div>
    <div class="bottom">
      <img src="../../assets/icon_同意_未选.png" alt  v-if="isShow" @click="changeImg"/>
      <img src="../../assets/icon_同意_已选.png" alt="" v-else @click="changeImg">
      <span>同意并接受</span>
      <p class="user" @click="$router.push('/agreement')">《用戶服务协议》</p>
      <span>和</span>
      <span class="user" @click="$router.push('/privacy')">《隐私政策》</span>
    </div>
    <div class="btn" :class="{active:isShow === false}">立即体验</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           isShow:true
        }
    },
    methods:{
        changeImg(){
            this.isShow = !this.isShow
        }
    }
};
</script>


<style lang="less" scoed>
* {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 1024px;
  height: 600px;

  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  // align-items: center;
  .logo {
    width: 180px;
    height: 180px;
    margin-left: 422px;
    margin-top: 84px;
  }
  .welcome {
    font-family: PingFangSC-Medium;
    font-size: 40px;
    color: #333333;
    text-align: center;
    line-height: 65px;
    // margin-top: 28px;
  }
  .bottom {
    margin-left: 254px;
    margin-top: 38px;
    display: flex;
    align-items: center;
    img {
      margin-right: 12.5px;
    }
    span {
      font-size: 24px;
    }
    .user{
      color: #FE7300;
      font-size: 24px;
      
    }
  }
  .btn {
    background: #cbcccb;
    border-radius: 35px;
    border-radius: 35px;
    width: 321px;
    height: 66px;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #ffffff;
    line-height: 66px;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    &.active{
       background: #FE7300;
    }
  }
}
</style>