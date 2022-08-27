const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path").resolve;
const WebpackHtmlPlugin = require("html-webpack-plugin");

const destinationPath = path(__dirname, "..", "build");
const sourcePath = path(__dirname, "..", "src");

module.exports = {
  entry: {
    index: path(sourcePath, "index.ts"),
  },
  output: {
    path: path(destinationPath),
    chunkFilename: "js/[name].[contenthash:6].js",
    filename: "[name].[contenthash:6].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: sourcePath,
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
            outputPath: "static/fonts",
            publicPath: "static/fonts",
          },
        },
      },
      {
        test: /\.(a?png|svg|jpe?g|gif|bmp)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "[name].[hash:8].[ext]",
            outputPath: "static/images",
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new WebpackHtmlPlugin({
      inject: "body",
      template: path(__dirname, "..", "public", "index.html"),
    }),
  ],
};
