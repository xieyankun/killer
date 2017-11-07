// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './common/fonts/iconfont.css'
import './common/stylus/index.styl'
import { ZTree } from 'vue2-lazy-tree'
import './../node_modules/vue2-lazy-tree/dist/vue2-tree.min.css'

Vue.use(ZTree)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
