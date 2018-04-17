const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function() {
  return {
    entry: {
      app: ['babel-polyfill', path.join(__dirname, '/js/index.jsx')]
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {importLoaders: 1}
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          ]
        },
        {
          test: /\.(eot|svg|ttf)(\[-z0-9]+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(gif|png|jpg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {limit: 8192}
            }
          ]
        }
      ]
    },
    plugins: getPlugins(),
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      sourcePrefix: ''
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      modules: [
        __dirname,
        'node_modules'
      ]
    }
  };
};

function getPlugins() {
  return [
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'}
    ])
  ];
};
