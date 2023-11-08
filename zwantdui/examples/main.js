import Vue from 'vue'
import App from './App.vue'
// import { ZwButton } from '../packages/index'
import '../lib/index.css'
import { ZwButton } from '../lib/index.umd.min'

Vue.config.productionTip = false
Vue.use(ZwButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
