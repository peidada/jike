// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import store from './vuex/store'

import '@/style/reset.css'
import '@/style/common.css'
import '@/style/space.css'
import '@/style/@media.css'
import '@/style/phone/dashboard.css'

import '@/utils/utils.js'
// import '@/style/index.scss'

import '@/assets/icon/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*import {http_get, http_post} from './api/axios.config'
Vue.prototype.$http_get = http_get
Vue.prototype.$http_post = http_post*/
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
