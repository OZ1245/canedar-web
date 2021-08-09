import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import Auth from '../views/pages/Auth.vue'
import Calendar from '../views/pages/Calendar.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'empty',
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'empty'
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      logout: true
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const apolloInit = store.dispatch('apolloInit')

router.beforeEach((to, from, next) => {
  apolloInit.then(() => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isAuthenticated) {
        store.dispatch('logOut')
        next({
          path: '/auth'
        })
      } else {
        next()
      }
    } else {
      next()
    }

    if (to.matched.some(record => !!(record.meta.logout))) {
      store.dispatch('logOut')
      next({
        path: '/auth'
      })
    }
  })
})
