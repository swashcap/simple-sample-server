module.exports = {
  devtool: 'source-map',
  entry: 'src/client/index.ts',
  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/
      }
    ]
  }
}
