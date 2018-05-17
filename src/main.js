// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCTGzimnjpnqXqvyXkOiTCI8p_0edt28yw ',
    libraries: 'places',
  },
})
Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
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
  components: { App },
  template: '<App/>',
})
var vm = new Vue({
  el:'#app1',
  data:{
    status:''
  },
  created: function(){
    this.loadQuote();
  },
methods:{
  loadQuote: function(){
  this.status='Loading.......';
  var vm=this;
  axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.status= response))
  }
}
})