import { Button, Row, Col, Container, Header, Main, Aside, Progress } from "element-ui";

const element = {
  install: function (Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Row.name, Row);
    Vue.component(Container.name, Container);
    Vue.component(Header.name, Header);
    Vue.component(Main.name, Main);
    Vue.component(Col.name, Col);
    Vue.component(Col.name, Col);
    Vue.component(Aside.name, Aside);
    Vue.component(Progress.name, Progress);
  },
};

export default element;
