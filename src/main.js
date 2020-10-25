import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGeolocation from 'vue-browser-geolocation'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBeh1XTDt_cGGjdLmLMlbELI6t84OlH5dM'
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
