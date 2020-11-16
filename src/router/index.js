import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Social from '../views/Social.vue'
// import Stats from '../views/Stats.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

]

const router = new VueRouter({
  routes
})

export default router
