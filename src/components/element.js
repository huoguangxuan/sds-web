import {
  Button,
  Row,
  Col,
  Container,
  Header,
  Main,
  Aside,
  Progress
} from "element-ui";
//生成二维码的组件 https://www.npmjs.com/package/qrcode.vue
import QrcodeVue from "qrcode.vue";
const element = {
  install: function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Row.name, Row);
    Vue.component(Container.name, Container);
    Vue.component(Header.name, Header);
    Vue.component(Main.name, Main);
    Vue.component(Col.name, Col);
    Vue.component(Col.name, Col);
    Vue.component(Aside.name, Aside);
    Vue.component(Progress.name, Progress);
    Vue.component("qrcode", QrcodeVue);
  }
};

export default element;
