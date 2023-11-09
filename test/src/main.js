import Vue from 'vue'
import App from './App.vue'
import  { ZwButton,
  ZwCheckBox,
  ZwInput, }  from 'zwbasic'
import 'zwbasic/lib/index.css';

Vue.config.productionTip = false
Vue.use(ZwButton);
Vue.use(ZwCheckBox);
Vue.use(ZwInput);

new Vue({
  render: h => h(App),
}).$mount('#app')
