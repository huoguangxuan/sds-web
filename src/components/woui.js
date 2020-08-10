import { Button, Icon, Dialog } from "woui-mobile";
const woui = {
  install: function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(Dialog.name, Dialog);
  }
};
export default woui;
