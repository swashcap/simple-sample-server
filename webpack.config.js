const path = require('path')

module.exports = {
  devServer: {
    compress: true,
    port: 9000
  },
  devtool: 'source-map',
  entry: './src/client/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true
          }
        }
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
