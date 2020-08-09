<template>
  <div class="wrap">
    <div class="tit">
      <img src="../../assets/icon_返回.png" alt @click="$router.go(-1)" />
      <p>用户隐私政策</p>
    </div>
    <div class="name">中国联通智能终端营业厅用户隐私政策</div>
    <div class="todya">
      <p>本版发布日期:2020年【7】月【17】日</p>
      <p>生效日期:2020年【7】月【17】日</p>
    </div>
    <div class="content">
      <p>中国联通智能终端营业厅（下面称为“我们”）非常重视用户的隐私和个人信息保护，致力于维持您对我们的信任。我们承诺采取相应的安全保护措施来保护您的个人信息。请在使用我们的中国联通智能终端营业厅中有关移动业务、宽带业务、固话业务、融合业务等各项产品或服务（以下统称“我们的产品或服务”）前，仔细阅读并了解《中国联通智能终端营业厅用户隐私政策》（“本隐私政策”）。</p>
      <p>您在使用我们的产品或服务时，我们需要按照实名制等国家法律法规及监管政策的相关要求收集、存储、使用、共享您的信息，以及向您提供服务及提升服务质量，我们希望通过本隐私政策向您说明：在您使用我们的产品或服务时，我们会收集哪些数据、为什么收集这些数据、会利用这些数据做什么以及我们如何保护这些数据。</p>
      <p>本隐私政策与您所使用的我们的产品或服务息息相关，对于您行使个人权利及保护您的个人信息至关重要，请您在使用我们的产品或服务前认真阅读并充分理解本政策所写明的内容。</p>
      <p>阅读过程中，如您对我们的隐私政策及服务条款的内容有任何疑问，请联系我们。一旦您开始使用我们的产品或服务，即表示您已经理解并同意本隐私政策全部内容。您使用或在我们更新本隐私政策后（我们会及时提示您更新的情况）继续使用我们的产品或服务，即意味着您同意本隐私政策(含更新版本)内容，并且同意我们按照本隐私政策收集、使用、保存和共享您的相关信息。</p>
      <p>本隐私政策包含以下内容：</p>
      <p>我们如何收集和使用您的个人信息；</p>
      <p>我们如何使用 Cookie 和同类技术；</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.wrap {
  font-family: PingFangSC-Semibold;
  width: 1024px;
  height: 600px;
  .tit {
    display: flex;
    align-items: center;
    img {
      width: 16px;
      height: 28px;
      margin: 0 33px 0 49px;
    }
    p {
      font-size: 34px;
      color: #333333;
    }
  }
  .name {
    font-size: 28px;
    color: #333333;
    text-align: center;
  }
  .todya {
    width: 287px;
    height: 44px;
    // float: right;

    margin-left: 630px;
    text-align: right;
    p {
      font-size: 16px;
      color: #333333;
    }
  }
  .content {
    width: 874px;
    height: 364px;
    margin-left: 50px;
    p {
      text-indent: 2em;
      font-size: 16px;
      color: #333333;
      line-height: 26px;
    }
  }
}
</style>
