import Vue from 'vue'
import App from './App.vue'
// import { ZwButton } from '../packages/index'
import '../lib/index.css'
import { ZwButton,ZwCheckBox,ZwInput } from '../lib/index.umd.min.js'

Vue.config.productionTip = false
Vue.use(ZwButton);
Vue.use(ZwCheckBox);
Vue.use(ZwInput);

new Vue({
  render: h => h(App),
}).$mount('#app')
