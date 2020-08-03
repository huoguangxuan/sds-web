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
app.use("/login", function(req, res) {
  console.log(req.params.body);
  res.json({
    status: 200,
    message: "success"
  });
});
//获取验证码
app.use("/getCode", function(req, res) {
  console.log(req);
  res.json({
    status: 200,
    code: "123456"
  });
});
app.listen("8090", () => {
  console.log("监听端口 8090");
});

// nodemon babel-node server.js

//查询
app.use("/inquire", function(req, res) {
  res.json(
    Mock.mock({
      code: 200,
      data: {
        mobile: "20元",
        addupitemname: [
          {
            flow: [
              {
                waeper: "10GB",
                banval: "5GB",
                wuval: "0"
              }
            ],
            voice: [
              {
                addupupper: "100分钟",
                xcanusevalue: "50分钟",
                xexceedvalue: "0"
              }
            ]
          }
        ]
      }
    })
  );
});
