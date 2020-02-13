var path = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src/css"),
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 8080,
    historyApiFallback: true
  }
};
