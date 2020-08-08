const path = require("path");
module.exports = {
  lintOnSave: true,
  publicPath: "./",
  configureWebpack: {
    // 配置 reslove 字段，缩小webpack寻找模块的范围
    resolve: {
      modules: ["./components", "node_modules"],
      alias: {
        "@": path.join(__dirname, "src"),
        views: path.join(__dirname, "src/views"),
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        api: path.join(__dirname, "src/api"),
        utils: path.join(__dirname, "src/utils")
      }
    }
    // 利用公共CDN服务加载包
    // externals: {
    //   vue: "Vue",
    //   axios: "axios",
    //   "vue-router": "VueRouter",
    //   vuex: "Vuex",
    //   mock: "mock"
    // },
    // mode: "production" // 生产环境，也是默认值
    // mode: "development" // 开发环境
  },
  devServer: {
    open: true,
    proxy: {
      "/sds-front": {
        // 这个是你要替换的位置
        target: "http://172.27.68.215:12001/", //这个是被替换的目标地址
        secure: true //接受对方是https的接口
      }
    }
  }
};
