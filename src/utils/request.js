import axios from "axios";
import store from "@/store";
import { getToken } from "@/utils/auth";
import { Dialog } from "vant";
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.method.toLocaleLowerCase() == "get")
      config.params = Object.assign({}, config.params, {
        timestr: +new Date()
      });
    if (store.getters.token) {
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error, "err"); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * 响应拦截器
   * 剥离无效数据，响应成功直接返回data
   */
  // res => {
  //   try {
  //     return res.data;
  //   } catch (e) {
  //     return res;
  //   }
  // },
  // err => {
  //   return Promise.reject(err);
  // }

  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    let res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.responseCode !== "0000") {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (
      //   res.responseCode === "50008" ||
      //   res.responseCode === "50012" ||
      //   res.responseCode === "50014"
      // ) {
      // to re-login
      // Dialog.confirm({
      //   message: "您还没登录联通营业厅，请您先登录完成授权",
      //   confirmButtonText: "前往登录",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // }).then(() => {
      //   store.dispatch("user/resetToken").then(() => {
      //     location.replace("/login");
      //   });
      // });
      // Toast(res.responseMSG);
      // }
      return Promise.reject(new Error(res.responseMSG || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Dialog({
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default service;
