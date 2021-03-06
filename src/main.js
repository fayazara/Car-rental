import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './../node_modules/bulma/css/bulma.css';
import 'boxicons'

Vue.config.productionTip = false
export const serverBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
