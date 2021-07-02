import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './graphql/apollo'
import './ml'
import VueCookies from 'vue-cookies'

// Page layouts
import Default from './views/layouts/default.vue'
import Empty from './views/layouts/empty.vue'

Vue.component('default-layout', Default)
Vue.component('empty-layout', Empty)

Vue.config.productionTip = false

Vue.use(VueCookies)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
