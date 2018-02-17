// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
Vue.use(Vuetify)

Vue.config.productionTip = false

import VDragged from 'v-dragged'

Vue.use(VDragged) 




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDDgFX2BJVYWjEOIrcjl3vs0fh4hQ1EqwQ",
      authDomain: "laffiche-18420.firebaseapp.com",
      databaseURL: "https://laffiche-18420.firebaseio.com",
      projectId: "laffiche-18420",
      storageBucket: "",
      messagingSenderId: "747026762550"
    })
  }
})
