import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { zw_ant } from 'zw_ant';

const app = createApp();
app.use(zw_ant);
createApp(App).mount('#app')
