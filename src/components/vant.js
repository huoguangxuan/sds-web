import { Icon } from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
  }
};
export default vant;
