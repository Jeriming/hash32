const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "hash32.js",
    library: "hash32",
    // 通过umd打包后,使用nodeJs运行，报错 self is not defined
    // 发现打包后没有：typeof self !== 'undefined' ? self : this
    // 直接使用了 self传入，查看官方文档发现需要设置globalObject为this
    libraryTarget: "umd",
    globalObject: 'this',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [],
};
