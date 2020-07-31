import axios from "@/utils/request";

const prefix = "";

// export default {
//   getUserDetail(userId) {
//     return axios.get(`${prefix}/phoenix/arctic/v1/user/${userId}`);
//   }
// };
export default {
  getCode(mobile) {
    return axios.get(`${prefix}/getCode/${mobile}`);
  }
};
