const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/blog/index.html',
      filename: 'blog/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'src/img/',
      to: 'img/'
    }, {
      from: 'src/blog/img/',
      to: 'blog/img/'
    }

    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
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
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
