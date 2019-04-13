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
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/
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
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
