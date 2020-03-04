const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: "8080",
    hot: true,
    open: true,
    historyApiFallback: {
      index: "/"
    }
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.styl(us)?$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(jpg|gif|jpeg|png|bmg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
                  test: /\.html$/,
                use:[
                     {
                          loader:'html-loader',
                           options:{
                            arrts:['img:src','img:data-src'],
                            minimize:false  //是否压缩html
                         }
                      }
                   ]
        }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html")
    }),
    new webpack.HotModuleReplacementPlugin
  ]
}