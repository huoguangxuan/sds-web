import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/welcome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pages" */ "../views/home")
  },
  //基本信息
  {
    path: "/baseInfo",
    name: "base-info",
    component: () => import(/* webpackChunkName: "pages" */ "../views/baseInfo")
  },
  //流量查询
  {
    path: "/netFlowQuery",
    name: "net-flow-query",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/netFlowQuery")
  },
  //异网用户
  {
    path: "/otherUsers",
    name: "other-users",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/otherUsers")
  },
  //话费查询
  {
    path: "/chargeQuery",
    name: "other-users",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/chargeQuery")
  }
];

const router = new VueRouter({
  routes
});

export default router;
