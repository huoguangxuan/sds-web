// import sha256 from "js-sha256";
// import JSEncrypt from "jsencrypt";

// //无效参数过滤
// function filterParams(obj) {
//   let _newPar = {};
//   for (let key in obj) {
//     //如果对象属性的值不为空，就保存该属性（如果属性的值为0，保存该属性。如果属性的值全部是空格，属于为空。）
//     if (
//       (obj[key] === 0 || obj[key]) &&
//       obj[key].toString().replace(/(^\s*)|(\s*$)/g, "") !== ""
//     ) {
//       //记录属性
//       _newPar[key] = obj[key];
//     }
//   }
//   //返回对象
//   return _newPar;
// }
// //生成签名的方法
// function sign(data, appSecret) {
//   var jsencrypt = new JSEncrypt();
//   let publicKey = "123"; //后台拿
//   jsencrypt.setPublicKey(publicKey);
//   const rsadata = jsencrypt.encrypt(data); //加密数据
//   var signs = sha256(rsadata) //再一次加密
//     .toString()
//     .toUpperCase();

//   return signs;
// }

// //处理公共请求参数
// function getEncryptParams(params) {
//   //params遍历，如果属性为空，则不传
//   params = filterParams(params);
//   var timestamp = Math.round(new Date().getTime()).toString();
//   //通过request.data获取body的内容，这个是postman内置变量
//   // var param = request.data;
//   // request.data["sn"] = timestamp;
//   params = Object.assign({}, params, { sn: timestamp, app_id: "XXXX" });

//   var appSecret = "XXXXXXXXXgrvVGcfkO8Mzh0pSCsPxXXXXXXX";
//   // var sign = md5Sign(params, appSecret);
//   var signStr = sign(params, appSecret);
//   var result = (params = Object.assign({}, params, {
//     _sign: signStr,
//     app_id: "21016"
//   }));
//   var formData = new FormData();
//   for (let key in result) {
//     formData.append(key, result[key]);
//   }
//   return result;
// }

// export default {
//   sign,
//   getEncryptParams
// };
