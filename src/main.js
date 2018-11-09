// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible/flexible'
import store from './store'
import vueTabbarSlide from 'vue-tabbar-slide'
import VueLazyLoad from 'vue-lazyload'
import App from './App'

const _importglobal = require('./assets/js/global_' + process.env.NODE_ENV)

// 移动端点击300毫秒延迟问题
// fastClick.attach(document.body)
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

Vue.prototype.globaldata = _importglobal('Globaldata')

Vue.use(VueAwesomeSwiper)

Vue.use(vueTabbarSlide)

Vue.use(ElementUI)

Vue.use(VueLazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
