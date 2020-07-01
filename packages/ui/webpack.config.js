const config = require('../../webpack.config');
const path = require('path');

module.exports = function(env, options) {
  return {
    ...config(env, options, __dirname),
    entry: path.resolve(__dirname, 'src'),
    output: {
      filename: 'index.js'
    }
  }
}
