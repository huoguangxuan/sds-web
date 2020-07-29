/**
 * Created by Peter on 22/3/16.
 * http 配置
 */
import axios from "axios";
// import {
//   Message
// } from 'element-ui'
import store from "../store";

const createRequestInterceptors = headers => {
  return config => {
    //get 请求参数加时间
    if (config.method.toLocaleLowerCase() == "get")
      config.params = Object.assign({}, config.params, {
        timestr: +new Date()
      });

    for (var key in headers) {
      config.headers[key] = headers[key];
    }

    try {
      if (store.state.accounts.token) {
        // config.headers.Authorization = `token ${store.state.base.token}`;
        config.headers.token = store.state.accounts.token;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (store.state.accounts.org) {
        if (localStorage.getItem("access_token")) {
          config.headers.access_token = localStorage.getItem("access_token");
        }
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (store.state.accounts.user) {
        config.headers.userid = store.state.accounts.user.id;
        config.headers.username = encodeURIComponent(
          store.state.accounts.user.name
        );
        config.headers.tenantId = store.state.accounts.user.tenantId;
      }
    } catch (e) {
      console.log(e);
    }

    return config;
  };
};

const requestInterceptorsError = err => {
  return Promise.reject(err);
};

const responseInterceptors = response => {
  if (response.config.responseType !== "arraybuffer") {
    //判断返回数据没有status时为下载文件接口，返回所有数据提供给前端做相应处理
    return response.data;
  } else {
    return response;
  }
};

const responseInterceptorsError = error => {
  var status, isNotLoginPage;
  isNotLoginPage =
    window._router && window._router.currentRoute.name === "Login"
      ? false
      : true;
  console.log("error", error);
  if (error.response) {
    status = error.response.status;
    if (status == "401" || status == "403" || status == "405") {
      //重新登录
      store.commit("ACCOUNT_LOGOUT");
      window._router.replace({
        path: "/#/login",
        query: {
          redirect: window._router.currentRoute.fullPath
        }
      });
      // Message.error('当前用户验证失败,请重新登录!');
    } else if (status == "404") {
      isNotLoginPage && window._router.push("/404");
    }
    // else if (status == '500') {
    //   isNotLoginPage && window._router.push('/500');
    // } else {
    //   isNotLoginPage && window._router.push(`/error?code=${status}`);
    // }
  } else if (error.request) {
    isNotLoginPage && window._router.push("/error?code=noresponse");
  } else {
    localStorage.setItem("errDescription", error.message);
    isNotLoginPage && window._router.push("/error?code=other");
  }
  return Promise.reject(error.response && error.response.data);
};

// axios.defaults.timeout = 20000;
// axios.defaults.baseURL = '/';
// // http request 拦截器
// axios.interceptors.request.use(requestInterceptors, requestInterceptorsError);
// // http response 拦截器
// axios.interceptors.response.use(responseInterceptors, responseInterceptorsError);

export const createAxios = mode => {
  var instance = axios.create();
  instance.defaults.timeout = 60000;
  instance.defaults.baseURL = "/";
  instance.interceptors.response.use(
    responseInterceptors,
    responseInterceptorsError
  );
  if (mode === "formData") {
    instance.interceptors.request.use(
      createRequestInterceptors({
        "Content-type": "multipart/form-data"
      }),
      requestInterceptorsError
    );
  } else {
    instance.interceptors.request.use(
      createRequestInterceptors({
        "Content-Type": "application/json;charset=UTF-8"
      }),
      requestInterceptorsError
    );
  }
  return instance;
};

export default createAxios();
