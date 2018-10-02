const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const conf = {
  devtool: 'eval-sourcemap',
  entry: path.join(__dirname, '../src') + '/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_compontents)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
           loader: 'css-loader',
           query: {
             import: false,
             importLoaders: 1,
             localIdentName: '[folder]__[local]___[hash:base64:5]',
             modules: true,
             sourceMap: true
           },
         }, {
           loader: 'postcss-loader',
           options: {
             ident: 'postcss',
             plugins: require('./postcss.config')(),
           }
         }],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin(
      {'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }}
    )
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    watchContentBase: true,
  }
}


module.exports = conf;
