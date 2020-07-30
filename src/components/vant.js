import { Icon, Progress } from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("van-progress", Progress);
  }
};
export default vant;
