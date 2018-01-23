const path = require('path');

const BUILD_DIR = path.join(__dirname, 'src/public');
const APP_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    contentBase: 'src',
    port: 3000,
    // host: "0.0.0.0",
    inline: true,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'latest',
            'react',
            'stage-0'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.less$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
};