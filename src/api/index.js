import axios from "@/utils/request";

const prefix = "";

export default {
  login(params) {
    let filterParams = { mobile: params.mobile };
    if (params.isSms) {
      //短信验证
      filterParams.sms = params.sms;
      return axios.post(`${prefix}/user/loginSms`, filterParams);
    }
    filterParams.password = params.password;
    return axios.post(`${prefix}/user/login`, filterParams);
  },
  getSms(params) {
    return axios.get(`${prefix}/user/getSms`, params);
  },
  isLogin(params) {
    return axios.get(`${prefix}/user/isLogin`, params);
  },
  getinquire() {
    return axios.get(`/inquire`);
  getCode(mobile) {
    return axios.get(`${prefix}/getCode/${mobile}`);
  },
  recharge(mobile) {
    return axios.get(`${prefix}/recharge/${mobile}`);
  }
};
