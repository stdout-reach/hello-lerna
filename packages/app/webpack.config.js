const config = require('../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function(env, options) {
  return {
    ...config(env, options, __dirname),
    entry: path.resolve(__dirname, 'src'),
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
      })
    ]
  }
}
