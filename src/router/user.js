export default [
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
    meta: {
      title: "登录"
      // auth: true,
      // keepAlive: true
    }
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "扫码登录"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pages" */ "../views/login")
  }
];
