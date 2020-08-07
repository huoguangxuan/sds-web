import { Button } from "woui-mobile";
const woui = {
  install: function(Vue) {
    Vue.component(Button.name, Button);
  }
};
export default woui;
