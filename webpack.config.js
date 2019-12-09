const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const devServer = {
  port: 8888,
  open: true,
};

const VENDOR_LIBS = [
  'axios',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
];

module.exports = {
  entry: {
    bundle: ['@babel/polyfill', './src/index.js'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              module: true,
            },
          },
        ],
      },
      {
        loader: 'file-loader',
        test: /\.jpe?g&|\.gif&|\png.&|\.svg&|\.woff&|\.woff2&|\.eot&|\.ttf&|\.wav&|\.np3&|\.ico&/,
      },
    ],
  },

  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ManifestPlugin(),
  ],

  optimization: {
    // performen
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },

  devServer,
};
