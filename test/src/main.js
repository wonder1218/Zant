import Vue from 'vue'
import App from './App.vue'
import  { ZwButton }  from 'zwantd'
import 'zwantd/lib/index.css';

Vue.config.productionTip = false
Vue.use(ZwButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
