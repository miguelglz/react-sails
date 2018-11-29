const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: './assets/index.js'
  },
  output: {
    path: __dirname + '/.tmp/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    })
  ]
};