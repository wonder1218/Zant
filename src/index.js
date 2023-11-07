import { defineAsyncComponent } from 'vue';
import ZantButton from './components/Button.vue';

const components = [
    ZantButton
];

const install = function(app) {
  components.forEach(component => {
    app.component(component.name, defineAsyncComponent(() => component));
  });
};

export default {
  install,
  ZantButton
}