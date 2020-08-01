import { login, getInfo } from "@/api/index";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";
// import router from '@/router'

const LOGIN = "LOGIN"; // 获取用户信息
const SetUserData = "SetUserData"; // 获取用户信息
const LOGOUT = "LOGOUT"; // 退出登录、清除用户数据
const USER_DATA = "userDate"; // 用户数据

export default {
  namespaced: true,
  state: {
    token: getToken() || "123",
    user: JSON.parse(localStorage.getItem(USER_DATA) || null)
  },
  mutations: {
    [LOGIN](state, data) {
      // 把用户信息放入vuex仓库中
      let userData = data.data;
      state.user = userData;
      // 放置token
      // let userToken = data.data;
      // state.token = userToken;
      // setToken(userToken);
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
      resetRouter();
    }
  },
  actions: {
    login(state, data) {
      try {
        let params = {
          macNo: data.macNo,
          userNo: data.userNo,
          userPWD: data.userPWD
        };
        login(params)
          .then(res => {
            state.commit(LOGIN, res);
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
        // Vue.Massage({
        //   message: "登录成功",
        //   position: "middle",
        //   duration: 1500
        // });
        // setTimeout(() => {
        //   const redirect = data.$route.query.redirect || "/";
        //   data.$router.replace({
        //     path: redirect
        //   });
        // }, 1500);
      } catch (error) {
        console.log(error);
      }
    },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const { data } = response;

            if (!data) {
              // eslint-disable-next-line
              reject("Verification failed, please Login again.");
            }
            commit(SetUserData, data);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
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
