import { Icon, Button } from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("van-button", Button);
  }
};
export default vant;
