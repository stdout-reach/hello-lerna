const path = require('path');

function pickLoader(loader) {
  if (loader == 'babel') {
    return {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-react',
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
        ],
        plugins: [
          [
            'babel-plugin-import',
            {
              libraryName: 'ui',
              libraryDirectory: 'dist',
              'camel2DashComponentName': false
            }
          ]
        ]
      }
    };
  }

  return 'ts-loader';
}

module.exports = function (env, options, dirname) {
  return {
    mode: env,
    output: {
      path: path.resolve(dirname, 'dist'),
      filename: 'main-[hash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: pickLoader(options.loader),
          exclude: /node_modules/
        }
      ]
    }
  };
};
