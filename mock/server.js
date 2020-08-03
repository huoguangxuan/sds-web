// import express from "express"
// import Mock from "mockjs"
const express = require("express"); //引入express
const Mock = require("mockjs"); //引入mock

let app = express();
const Random = Mock.Random;

//允许跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// demo
app.use("/list", function(req, res) {
  res.json(
    Mock.mock({
      status: 200,
      "list|10": [
        {
          "name|+1": ["John Brown", "Jim Green", "Joe Black", "Jon Snow"],
          "age|18-70": 70,
          address: Random.region(),
          date: Random.date()
        }
      ]
    })
  );
});

//login
app.use("/user/login", function(req, res) {
  res.json({
    macNo: "1000",
    responseCode: "0000",
    responseMSG: "success",
    data: {
      token: "i8as89a9200z99s99asads9xajkkflla2ll",
      package_id: "1000",
      package_name: "畅爽全国冰激凌套餐398元档",
      product_id: "15534466441",
      product_type: "无",
      status: "开通",
      cust_name: "刘备",
      cert_type: "18位身份证",
      cert_num: "140203199711250867",
      open_date: "20200730110222",
      user_head_img: "http://temp.im/300x200",
      cust_lvl: "3",
      manager_name: "曹操",
      manager_concact: "15523632635",
      land_lvl: "5",
      user_status: "无",
      pay_type: "1"
    }
  });
});
//login
app.use("/user/loginSms", function(req, res) {
  res.json({
    macNo: "1000",
    responseCode: "0000",
    responseMSG: "success",
    data: {
      token: "i8as89a9200z99s99asads9xajkkflla2ll",
      package_id: "1000",
      package_name: "畅爽全国冰激凌套餐398元档",
      product_id: "15534466441",
      product_type: "无",
      status: "开通",
      cust_name: "刘备",
      cert_type: "18位身份证",
      cert_num: "140203199711250867",
      open_date: "20200730110222",
      user_head_img: "http://temp.im/300x200",
      cust_lvl: "3",
      manager_name: "曹操",
      manager_concact: "15523632635",
      land_lvl: "5",
      user_status: "无",
      pay_type: "1"
    }
  });
});
// isLogin fail
app.use("/user/isLogin", function(req, res) {
  res.json({
    macNo: "1000",
    responseCode: "50008",
    responseMSG: "token已过期，请重新登录",
    data: null
  });
});
//isLogin 成功登录
// app.use("/user/isLogin", function(req, res) {
//   console.log(req.params);
//   res.json({
//     macNo: "1000",
//     responseCode: "0000",
//     responseMSG: "登录成功",
//     data: {
//       token: "i8as89a9200z99s99asads9xajkkflla2ll",
//       package_id: "1000",
//       package_name: "畅爽全国冰激凌套餐398元档",
//       product_id: "15534466441",
//       product_type: "无",
//       status: "开通",
//       cust_name: "刘备",
//       cert_type: "18位身份证",
//       cert_num: "140203199711250867",
//       open_date: "20200730110222",
//       user_head_img: "http://temp.im/300x200",
//       cust_lvl: "3",
//       manager_name: "曹操",
//       manager_concact: "15523632635",
//       land_lvl: "5",
//       user_status: "无",
//       pay_type: "1"
//     }
//   });
// });
//获取验证码
app.use("/user/getSms", function(req, res) {
  res.json({
    responseCode: "0000",
    responseMSG: "短信发送成功",
    data: null
  });
});
app.listen("8090", () => {
  console.log("监听端口 8090");
});

// nodemon babel-node server.js

//查询
app.use("/inquire", function(req, res) {
  res.json({
    responseCode: "0000",
    data: {
      mobile: "20元",
      addupitemname: {
        flow: {
          waeper: "10GB",
          banval: "5GB",
          wuval: "0"
        },
        voice: {
          addupupper: "100分钟",
          xcanusevalue: "50分钟",
          xexceedvalue: "0"
        }
      }
    }
  });
});
