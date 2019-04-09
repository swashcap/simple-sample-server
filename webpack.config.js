const path = require('path')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000
  },
  entry: './src/client/index.ts',
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
  }
}
