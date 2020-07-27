const path = require("path");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      modules: ["./components", "node_modules"],
      alias: {
        "@components": path.join(__dirname, "src/components"),
      },
    },
  },
  devServer: {
    open: true,
  },
};
