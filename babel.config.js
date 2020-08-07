module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "woui-mobile",
        libraryDirectory: "es"
      },
      "woui-mobile"
    ]
  ]
};
