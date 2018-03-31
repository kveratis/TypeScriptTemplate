const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  cache: false,
  context: path.join(__dirname, "src", "client"),
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:6].bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      }, {
        test: /.js$/,
        loader: "source-map-loader",
        enforce: "pre",
        exclude: /node_modules/,
      },
      { 
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "../../template.html"
    })
  ],
};