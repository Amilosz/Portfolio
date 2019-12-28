const nodeExternals = require('webpack-node-externals')

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './test/index.js',
  output:{
    filename: 'tests.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node:{
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader/locals?modules']
      }, {
        test: /\.js$/,
        use: ['awesome-typescript-loader'],
        include: [
          path.resolve(__dirname, 'src/common'),
          path.resolve(__dirname, 'src/about-me'),
          path.resolve(__dirname, 'src/blog'),
          path.resolve(__dirname, 'src/github')
        ]
      }
    ]
  }
};
