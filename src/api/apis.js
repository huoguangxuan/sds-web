import axios from "./http";

const prefix = "";

export default {
  getUserDetail(userId) {
    return axios.get(`${prefix}/phoenix/arctic/v1/user/${userId}`);
  }
};
