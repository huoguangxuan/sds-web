import { Icon } from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("qrcode", Icon);
  }
};
export default vant;
