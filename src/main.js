import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/permission";
import QrcodeVue from "qrcode.vue";

// 使用woui
import woUi from "@/components/woui";
import "woui-mobile/lib/woui-mobile.css";
Vue.use(woUi);

// 重置浏览器默认样式，引入Normalize.css
import "normalize.css";

// 根据屏幕宽度动态设置rem基准值
import "amfe-flexible";

Vue.component("qrcode", QrcodeVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
