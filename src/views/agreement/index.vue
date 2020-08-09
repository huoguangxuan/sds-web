<template>
  <div class="wrap">
    <div class="tit">
      <img src="../../assets/icon_返回.png" alt @click="$router.go(-1)" />
      <p>用户服务协议</p>
    </div>
    <div class="name">中国联通智能终端营业厅服务协议</div>
    <div class="content">
      尊敬的客户，欢迎访问中国联合网络通信有限公司智能终端营业厅客户端软件。
      本协议是您（或称“用户”）与中国联合网络通信有限公司(以下简称 “中国联通”)
      之间就使用“中国联通智能终端营业厅”客户端软件服务所订立的契约，您可通过中国联通智能终端营业厅进行用户信息查询、
      信息变更、缴费、业务办理等本客户端提供的自助服务。要成为中国联通智能终端营业厅使用者，请您必须仔细阅读同意并接受以下服务条款，谢谢！
    </div>
    <div class="content_list">
      <span>一、定义</span>
      <p>1、本客户端：在本协议中除非专门指明或声明，均指由中国联合网络通信有限公司所有并负责运营的“中国联通智能终端营业厅”客户端软件。</p>
      <p>2、用户/您：指同意并遵守本协议，完成本客户端所有注册程序并经本客户端确认，拥有本客户端用户登录账号和密码的自然人、法人、其他组织。</p>
      <p>3、用户信息：指用户注册信息以及用户使用本客户端用户服务时提交的、被本客户端所知悉的交易信息。</p>
      <p>4、用户注册：是指用户登录中国联通智能终端营业厅客户端，并按要求填写相关信息并确认同意履行本协议的过程。</p>
      <p>5、用户注册信息：指用户在本客户端注册的各项信息，包括其后通过身份验证后修改所填写的内容。</p>
      <p>6、用户指令：本协议中，除非专门指明或声明，均指用户以数据电文形式向本客户端提出的申请、要求，包括但不限于用户要求本客户端提供、变更或取消其依据本客户端业务流程可享有的各项服务的申请、要求。</p>
      <p>7、用户服务/产品使用协议：根据中国联合网络通信有限公司的业务规定或规则，用户与中国联合网络通信有限公司就提供电信业务服务事宜另行签署的协议和/或合同。</p>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.wrap {
  font-family: PingFangSC-Semibold;
//   width: 1024px;
//   height: 600px;
  .tit {
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 28px;
      margin: 0 33px 0 49px;
    }
    p {
      font-family: PingFangSC-Semibold;
      font-size: 34px;
      color: #333333;
    }
  }
  .name {
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #333333;
    text-align: center;
  }
  .content {
    text-indent: 2em;
    width: 861px;
    height: 140px;
    margin-left: 70px;
    margin-top: 13px;
    font-size: 18px;
    color: #333333;
    line-height: 28px;
  }
  .content_list {
    width: 846px;
    height: 371px;
    margin-left:70px;
    font-size: 16px;
    color: #333333;
    line-height: 26px;
    p{
        text-indent: 2em;
    }
  }
}
</style>
