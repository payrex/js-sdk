const path = require('path')

module.exports = {
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'browser.bundle.js',
    library: 'PayrexSdk',
    libraryTarget: 'window'
  },
  module: {
    loaders: [
       {
           test: /\.js$/,
           loader: 'babel-loader',
           query: {
               presets: ['env']
           }
       }
     ]
  },
  stats: {
     colors: true
  },
  devtool: 'source-map'
};
