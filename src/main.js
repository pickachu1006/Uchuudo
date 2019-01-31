import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue'
import router from './router'
import './bus'
import currencyFilter from './filter/currency.js'
import VeeValidate from 'vee-validate';
// import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import jaValidate from 'vee-validate/dist/locale/ja'
import store from './store/store'
import VueI18n from 'vue-i18n';

Vue.use(VueAxios,axios);
Vue.use(VeeValidate);
Vue.use( VueI18n );
VeeValidate.Validator.localize('ja',jaValidate);
Vue.config.productionTip = false;
Vue.component('Loading',Loading)
Vue.filter('currency',currencyFilter);

axios.defaults.withCredentials = true;

// i18n
import jp from './i18n/jp.json'; // 存放英文翻譯
import tw from './i18n/tw.json'; // 存放繁體中文翻譯
const locales = {
  jp: jp,
  tw: tw,
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response)=>{
      if(response.data.success){
         next()
      }else{
        next({
          path:'/login'
        })
      }
  })
  }else{
    next()
  }
})
