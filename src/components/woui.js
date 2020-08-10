import { Button, Cell, CellGroup, Dialog } from "woui-mobile";
const woui = {
  install: function(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Cell.name, Cell);
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(Dialog.name, Dialog);
  }
};
export default woui;
