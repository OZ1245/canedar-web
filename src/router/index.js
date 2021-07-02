import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import Auth from '../views/pages/Auth.vue'
import Calendar from '../views/pages/Calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'empty'
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
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
