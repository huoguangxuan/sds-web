import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "@/components/vant";
import store from "./store";
import "@/utils/permission";
import QrcodeVue from "qrcode.vue";
// 引入全局重置样式
import "./assets/base.css";
Vue.use(vant);
// 根据屏幕宽度动态设置rem基准值
import "amfe-flexible";

Vue.component("qrcode", QrcodeVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
