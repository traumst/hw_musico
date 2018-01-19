const path = require('path');

const BUILD_DIR = path.join(__dirname, 'src/client/public');
const APP_DIR = path.join(__dirname, 'src/client/app');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/api/'
  },
  devServer: {
    contentBase: 'src/client',
    port: 3000,
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
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  }
};