import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

import 'popper.js'
import 'bootstrap'
import Trend from "vuetrend"

Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(VueMeta);
Vue.use(Trend)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
