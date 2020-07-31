import {
  Icon,
  Form,
  Field,
  Toast,
  Button,
  Progress,
  Popup,
  Dialog
} from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("van-form", Form);
    Vue.component("van-field", Field);
    Vue.component("Toast", Toast);
    Vue.component(Button.name, Button);
    Vue.component("van-progress", Progress);
    Vue.component("van-popup", Popup);
    Vue.component("van-dialog", Dialog);
  }
};
export default vant;
