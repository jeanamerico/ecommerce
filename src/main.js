import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from "axios";
import firebase from "firebase/app";
import router from './router'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE-R95Fc263qVDqCJ58LmhRp1v89gDq5w",
  authDomain: "automatic-array-297413.firebaseapp.com",
  databaseURL: "https://automatic-array-297413.firebaseio.com",
  projectId: "automatic-array-297413",
  storageBucket: "automatic-array-297413.appspot.com",
  messagingSenderId: "1052019230762",
  appId: "1:1052019230762:web:ea594078ce473276d61b53",
  measurementId: "G-CC20JLHNXS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
