import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stats from "../views/Stats.vue";
import Register from "../views/Register.vue";
import PageNotFound from "../views/components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
