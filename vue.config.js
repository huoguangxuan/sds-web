const path = require("path");
module.exports = {
  lintOnSave: true,
  configureWebpack: {
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
  },
  devServer: {
    open: true
  }
};
