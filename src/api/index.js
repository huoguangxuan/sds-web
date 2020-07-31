import request from "@/utils/request";

const prefix = "";

// export default {
//   getUserDetail(userId) {
//     return axios.get(`${prefix}/phoenix/arctic/v1/user/${userId}`);
//   }
// };
export function login(params) {
  return request({
    url: `${prefix}/login`,
    method: "post",
    params
  });
}
export function getCode(mobile) {
  return request({
    url: `${prefix}/getCode/${mobile}`,
    method: "get"
  });
}
