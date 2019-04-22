import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "rank",
      component: () => import("./views/Rank.vue")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("./views/Detail.vue")
    }
  ]
});
