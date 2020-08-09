<template>
  <div>
    <back title="版本信息" />
    <div class="flexcc flexcol edition">
      <img src="@/assets/img/5Gn.png" alt="" />
      <p>联通智能终端营业厅（V1.1.0）</p>
    </div>
    <div class="content">
      <h2 class="tit">
        版本更新介绍
      </h2>
      <ul class="content-list">
        <li class="item">
          <div class="item-head" @click.stop="changeArrow">
            <div class="title">
              <h3>
                联通智能终端营业厅（V1.1.0）<span class="label">最新</span>
              </h3>
              <h5>2020年8月20日发布</h5>
            </div>
            <div class="action">
              <wo-icon name="arrow-down" size="mini"></wo-icon>
            </div>
          </div>
          <div class="item-body">
            <p class="p-title">1.上线查询功能</p>
            <p class="p-content">
              1.1查话费，可以帮您查询账户内的剩余话费金额； 版本信息 1.0.0<br />
              1.2查余量，可以帮您查询账户内已用流量与剩余语音数量；<br />
              1.3查信息，支持本网手机用户和本网非手机用户查询了解账户的基本信息；<br />
            </p>
          </div>
        </li>
        <li class="item">
          <div class="item-head" @click.stop="changeArrow">
            <div class="title">
              <h3>
                联通智能终端营业厅（V1.0.0）
              </h3>
              <h5>2020年8月20日发布</h5>
            </div>
            <div class="action">
              <wo-icon name="arrow-down" size="mini"></wo-icon>
            </div>
          </div>
          <div class="item-body">
            <p class="p-title">1.上线查询功能</p>
            <p class="p-content">
              1.1查话费，可以帮您查询账户内的剩余话费金额； 版本信息 1.0.0<br />
              1.2查余量，可以帮您查询账户内已用流量与剩余语音数量；<br />
              1.3查信息，支持本网手机用户和本网非手机用户查询了解账户的基本信息；<br />
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <Collapse v-model="value1" @on-change="changFun">
      <Panel name="1">
        <span>标题1</span>
        <template v-slot:body>
          <div>111111111111111111111111</div>
        </template>
      </Panel>
    </Collapse> -->
  </div>
</template>
<script>
import back from "@/components/Back";
// import Collapse from "@/components/Collapse/collapse";
// import Panel from "@/components/Collapse/panel";
import { Icon } from "woui-mobile";
export default {
  data() {
    return {
      isDown: false,
      value1: "1"
    };
  },
  computed: {
    arrow() {
      return `arrow-${this.isDown ? "top" : "down"}`;
    }
  },
  components: { back, [Icon.name]: Icon },
  methods: {
    // changFun() {},
    changeArrow(e) {
      e.stop;
      this.isDown = !this.isDown;
      var selectedBedDom = e.currentTarget;
      selectedBedDom.nextElementSibling.className = `item-body ${
        this.isDown ? "show" : ""
      }`;
      selectedBedDom.firstElementChild.nextElementSibling.firstElementChild.className = `wo-icon wo-icon--mini wo-icon--arrow-${
        this.isDown ? "top" : "down"
      }`;
    }
  }
};
</script>
<style lang="less" scoped>
.edition {
  margin-top: 85px;
  p {
    font-size: 28px;
    line-height: 65px;
  }
}
.content {
  padding: 0 90px;
  .tit {
    font-size: 26px;
    line-height: 65px;
  }
  &-list {
    .item {
      &-head {
        display: flex;
        align-items: center;
        height: 100px;
        border-bottom: 1px solid #eeeeee;
        .title {
          flex: 1;
          h3 {
            font-size: 22px;
            margin-top: 24px;
            span {
              padding: 4px 18px;
              background-color: #fe7300;
              color: #fff;
              border-radius: 4px;
              font-size: 16px;
            }
          }
          h5 {
            font-size: 16px;
            color: #999;
            margin-top: 8px;
            margin-bottom: 16px;
          }
        }
        .action {
          color: #999;
          padding: 20px;
        }
      }
      &-body {
        &.show {
          .p-title {
            display: block;
          }
          .p-content {
            display: block;
          }
        }

        padding: 16px 0px;
        .p-title {
          display: none;
          font-size: 22px;
        }
        .p-content {
          display: none;
          font-size: 16px;
          color: #666;
          line-height: 26px;
          padding: 7px 0 10px;
        }
      }
    }
  }
}
</style>
