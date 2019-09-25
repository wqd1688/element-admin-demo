import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

Vue.use(ElementUI,{size:'small'})

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
