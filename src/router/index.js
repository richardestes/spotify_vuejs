import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Social from '../views/Social.vue'
import Stats from '../views/Stats.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  },
  {
    path: '/social',
    name: 'Social',
    component: Social
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/*',
    component: PageNotFound
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
