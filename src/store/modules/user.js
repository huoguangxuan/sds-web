import api from "@/api";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router, { resetRouter } from "@/router";
import { Toast } from "vant";
const LOGIN = "LOGIN"; // 获取用户信息
const SetUserData = "SetUserData"; // 获取用户信息
const LOGOUT = "LOGOUT"; // 退出登录、清除用户数据
const USER_DATA = "userDate"; // 用户数据

export default {
  namespaced: true,
  state: {
    token: getToken() || "",
    user: JSON.parse(localStorage.getItem(USER_DATA) || null)
  },
  mutations: {
    [LOGIN](state, data) {
      // 把用户信息放入vuex仓库中
      let userData = data.data;
      state.user = userData;
      // token存放
      let userToken = data.data.token || null;
      state.token = userToken;
      setToken(userToken);
    },

    [SetUserData](state, userData = {}) {
      state.user = userData;
      localStorage.setItem(USER_DATA, JSON.stringify(userData));
    },
    [LOGOUT](state) {
      state.user = null;
      state.token = null;
      removeToken();
      localStorage.removeItem(USER_DATA);
      if (router.path !== "/") resetRouter();
    }
  },
  actions: {
    async isLogin(state, data) {
      try {
        let res = await api.isLogin(data);
        state.commit(LOGIN, res.data);
        state.commit(SetUserData, res.data);
        Toast({
          message: "登录成功",
          position: "middle",
          duration: 1500
        });
        // setTimeout(() => {
        //   const redirect = data.$route.query.redirect || "/";
        //   data.$router.replace({
        //     path: redirect
        //   });
        // }, 1500);
      } catch (error) {
        // console.log(error);
        // state.commit(LOGOUT);
      }
    },
    async login(state, data) {
      try {
        let res = await api.login(data);
        state.commit(SetUserData, res.data);
        state.commit(LOGIN, res);
        router.push("/");
        Toast({
          message: "登录成功",
          position: "middle",
          duration: 1500
        });
        // setTimeout(() => {
        //   data.router.push("/home");
        //   console.log(data.router);
        //   // const redirect = data.$router.query.redirect || "/home";
        //   // data.$router.replace({
        //   //   path: redirect
        //   // });
        // }, 1500);
      } catch (error) {
        console.log(error);
      }
    },
    // get user info
    // getInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     api
    //       .getInfo(state.token)
    //       .then(response => {
    //         const { data } = response;
    //         if (!data) {
    //           // eslint-disable-next-line
    //           reject("Verification failed, please Login again.");
    //         }
    //         commit(SetUserData, data);
    //         commit(SetUserData, data);
    //         resolve(data);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },
    resetToken({ state }) {
      state.token = "";
    }
  },
  getters: {
    token(state) {
      return state.token;
    },
    user(state) {
      return state.user;
    }
  }
};
