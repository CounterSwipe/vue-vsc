import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NavTop from "./views/NavTop.vue";
import NavBtm from "./views/NavBtm.vue";
import NotFoundComponent from "./views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      //component: Home
      components: {
        default: Home,
        navtop: NavTop,
        navbtm: NavBtm
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        default: () => import("./views/About.vue"),
        navtop: NavTop,
        navbtm: NavBtm
      }
    },
    {
      path: "*",
      components: {
        default: NotFoundComponent,
        navtop: NavTop,
        navbtm: NavBtm
      }
    }
  ]
});
