const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (env, options) {
  return {
    mode: env === 'production' || 'development',
    entry: path.resolve(__dirname, 'packages/core/app'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main-[hash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'packages/core/app/index.html')
      })
    ]
  };
};
