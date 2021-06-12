const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const { CleanPlugin } = require('webpack')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {    // 시작점
    main: './src/app.js'
  },
  output: {   // 번들링 결과
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png|jpg|gif|svg$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
      `
    }),
    new webpack.DefinePlugin({
      TWO: JSON.stringify('1+1'),
      'api.domain': JSON.stringify('http://dev.api.domain.com')
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   templateParameters: {
    //     env: process.env.NODE_ENV === 'development' ? '(개발용)' : ''
    //   },
    //   minify: process.env.NODE_ENV === 'production' ? {
    //     collapseWhitespace: true,
    //     removeComments: true,
    //   } : false
    // }),
    // new CleanWebpackPlugin(),
    // ...(process.env.NODE_ENV === 'production'
    //   ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
    //   : [])
  ]
}