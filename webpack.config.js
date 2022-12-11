const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "hash32.js",
    library: "hash32",
    libraryTarget: "umd",
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
