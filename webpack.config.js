const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './docs/build')
  },
  devtool: 'sourcemaps',
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          publicPath: './build/'
        }
      }
    ]
  }
};
