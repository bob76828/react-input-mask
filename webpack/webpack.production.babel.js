import webpack from 'webpack';
import path from 'path';

export default {
  progress: true,
  devtool: 'hidden-source-map',
  bail: true,
  entry: {
    index: [
      './InputElement.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    filename: 'InputElement.js',
    library: 'ReactInputMask',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: ['babel'],
        exclude: /(node_modules)/,
        query: {
          plugins: ['transform-remove-console'],
          comments: false
        }
      }
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
};
