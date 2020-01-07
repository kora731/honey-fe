import Vue from 'vue'
import VueGtag from "vue-gtag"

import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: 'UA-155181824-1' }
}, router);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
