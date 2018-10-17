// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import store from './store/store'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'
import './../static/css/player.css'

var SocialSharing = require('vue-social-sharing')

Vue.use(SocialSharing)
// Vue.use(Vuetify)
Vue.use(VueResource)
Vue.prototype.$ajax = axios

Vue.http.options.root = 'https://cris-svvv.firebaseio.com/'

Vue.use(Vuetify, { theme: {
  primary: '#000000',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
