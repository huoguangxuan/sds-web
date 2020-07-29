const path = require("path");

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      modules: ["./components", "node_modules"],
      alias: {
        "@components": path.join(__dirname, "src/components"),
        "@assets": path.join(__dirname, "src/aasets")
      }
    }
  },
  devServer: {
    open: true
  }
};
