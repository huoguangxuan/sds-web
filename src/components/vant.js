import { Icon, Form, Field, Toast, Button } from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("van-form", Form);
    Vue.component("van-field", Field);
    Vue.component("Toast", Toast);
    Vue.component(Button.name, Button);
  }
};
export default vant;
