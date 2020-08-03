import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/welcome";
import store from "../store";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
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
  //用户中心
  {
    path: "/userInfo",
    name: "user-info",
    component: () => import(/* webpackChunkName: "pages" */ "../views/userInfo")
  },
  //流量查询
  {
    path: "/netFlow",
    name: "net-flow",
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
    name: "charge-query",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/chargeQuery")
  },
  // 话费充值
  {
    path: "/recharge",
    name: "recharge",
    component: () => import(/* webpackChunkName: "pages" */ "../views/recharge")
  },
  // 金额选择
  {
    path: "/amountSelection",
    name: "amount-selection",
    component: () =>
      import(
        /* webpackChunkName: "pages" */ "../views/recharge/amountSelection"
      ),
    meta: {
      title: "话费充值"
    }
  },
  // 充值中
  {
    path: "/recharging",
    name: "recharging",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/recharge/recharging")
  }
];

//webpack的自动导入功能

const routerContext = require.context("./", true, /\.js$/);
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 不处理
  if (route.startsWith("./index")) {
    return;
  }
  const routerModule = routerContext(route);
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = routes.concat(routerModule.default || routerModule);
});

routes = routes.concat({
  path: "*",
  redirect: "/404"
});

const createRouter = () =>
  new VueRouter({
    mode: "history", //require service support
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
  });
const myRouter = createRouter();
const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem("count") * 1 || 0;
history.setItem("/", 0);

myRouter.beforeEach((to, from, next) => {
  if (to.params.direction) {
    store.commit("updateDirection", to.params.direction);
  } else {
    const toIndex = history.getItem(to.path);
    const fromIndex = history.getItem(from.path);
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (
        !fromIndex ||
        parseInt(toIndex, 10) > parseInt(fromIndex, 10) ||
        (toIndex === "0" && fromIndex === "0")
      ) {
        store.commit("updateDirection", "van-slide-right");
      } else {
        store.commit("updateDirection", "van-slide-left");
      }
    } else {
      ++historyCount;
      history.setItem("count", historyCount);
      to.path !== "/" && history.setItem(to.path, historyCount);
      store.commit("updateDirection", "van-slide-right");
    }
  }
  next();
});

export function resetRouter() {
  myRouter.replace("/");
}

export default myRouter;
