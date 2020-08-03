<template>
  <!-- 余量查询页 -->
  <div class="netflow">
    <!-- 主体查询内容 -->
    <div class="content">
      <ul>
        <li>
          <p class="txtmax">余量查询</p>
        </li>
        <li>
          <span class="txtmax">已用流量</span
          ><span class="txtmin">{{ this.voiceadd }}</span>
        </li>
        <van-progress :percentage="80" stroke-width="20" color="#41403E" />
        <li>
          <span class="txtmax">剩余语音</span><span class="txtmin">xx分钟</span>
        </li>
        <van-progress :percentage="80" stroke-width="20" color="#41403E" />
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="qrcode">
        <dl>
          <dt>
            <qrcode
              :value="value"
              :size="size"
              level="H"
              style="margin:10px"
            ></qrcode>
          </dt>
          <dd>扫码进入手机营业厅app了解更多信息</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      value: "www.baidu.com",
      size: 100,
      voiceadd: "",
      flowadd: ""
    };
  },
  mounted() {
    this.inquire();
  },
  methods: {
    //查询请求接口
    inquire() {
      api.getinquire().then(res => {
        console.log(res);
        //this.voiceadd = res.data.addupitemname.flow;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.netflow {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
.content {
  height: 40vh;
  padding: 0 25px;
  ul li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 16px 20px;
  }
  .txtmax {
    font-size: 20px;
    font-weight: bold;
  }
  .txtmin {
    font-size: 14px;
  }
}
.bottom {
  height: 60vh;
  padding: 0 25px;
  display: flex;
  flex-direction: row-reverse;
  .qrcode {
    width: 190px;
    height: 170px;
    text-align: center;
    dl {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
