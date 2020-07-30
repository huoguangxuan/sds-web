// 导出一个插件的配置文件
// 后处理器的配置文件
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 96,
      propList: ["*"]
    }
  }
};
