import axios from "@/utils/request";

const prefix = "";

export default {
  getSms(params) {
    return axios.get(`${prefix}/user/getSms`, params);
  }
};
