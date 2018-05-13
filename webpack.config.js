const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const outputDirectory = 'dist';
const clientDirectory = '/src/client';
console.log(__dirname);

module.exports = function() {
  return {
    entry: {
      app: ['babel-polyfill', path.join(__dirname, `${clientDirectory}/index.jsx`)]
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
      filename: 'bundle.js',
      path: path.join(__dirname, outputDirectory),
      publicPath: '/',
      sourcePrefix: ''
    },
    devServer: {
      port: 3000,
      open: true,
      proxy: {
        '/api': 'http://localhost:8080'
      }
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
    new CleanWebpackPlugin([outputDirectory]),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, `${clientDirectory}/assets`), to: 'assets'}
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ];
};
