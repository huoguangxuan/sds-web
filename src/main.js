import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/permission";
// import element from "@/components/element";
// import "element-ui/lib/theme-chalk/index.css";

// 引入全局重置样式
import "./assets/base.css";

// Vue.use(element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
