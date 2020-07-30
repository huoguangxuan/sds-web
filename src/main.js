import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/permission";
import QrcodeVue from "qrcode.vue";

// 引入全局重置样式
import "./assets/base.css";

Vue.use(QrcodeVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
