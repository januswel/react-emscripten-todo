const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/public')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules']
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}

module.exports = config
