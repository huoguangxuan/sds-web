import {
  Icon,
  Form,
  Field,
  Toast,
  Button,
  Progress,
  Cell,
  CellGroup,
  Image as VanImage
} from "vant";
const vant = {
  install: function(Vue) {
    Vue.component("van-icon", Icon);
    Vue.component("van-form", Form);
    Vue.component("van-field", Field);
    Vue.component("Toast", Toast);
    Vue.component(Button.name, Button);
    Vue.component("van-progress", Progress);
    Vue.component("van-cell", Cell);
    Vue.component("van-cell-group", CellGroup);
    Vue.component("van-image", VanImage);
  }
};
export default vant;
