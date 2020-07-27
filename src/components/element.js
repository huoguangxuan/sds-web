import { Button, Select } from "element-ui";

const element = {
  install: function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Select.name, Select);
  },
};

export default element;
