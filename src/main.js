import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './ml'
import VueCookies from 'vue-cookies'
// import ApolloClient from 'apollo-boost'
import graphqlClient from '@/utils/graphql'
import VueApollo from 'vue-apollo'

// Page layouts
import Default from './views/layouts/default.vue'
import Empty from './views/layouts/empty.vue'

Vue.component('default-layout', Default)
Vue.component('empty-layout', Empty)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: graphqlClient
})

Vue.use(VueCookies)
Vue.use(VueApollo)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
