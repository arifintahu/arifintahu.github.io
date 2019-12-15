import Vue from "vue";
import Router from "vue-router";
import Portofolio from "./views/portofolio.vue";
import ProjectDetail from "./views/project/projectdetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "portofolio",
      component: Portofolio
    },
    {
      path: "/project/:index/:view",
      name: "project",
      component: ProjectDetail,
      props: true
    }
  ]
});