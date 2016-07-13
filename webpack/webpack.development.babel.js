import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  progress: true,
  entry: {
    index: [
      'webpack-hot-middleware/client',
      './dev/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../build/public'),
    publicPath: '/public/',
    filename: 'javascripts/bundle.js'
  },
  sassLoaderConfig: {
    sourceMap: true
  },
  module: {
    loaders: [
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
        query: {
          name: 'fonts/[hash].[ext]'
        }
      },
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /(node_modules)/,
        query: {
          plugins: [
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }]
            }]
          ]
        }
      },
      {
        test: /\.(css|scss)/,
        loader: ExtractTextPlugin.extract('style',
          'css?sourceMap!' +
          'sass?config=sassLoaderConfig')
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('stylesheets/bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
