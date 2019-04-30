const path = require('path')

module.exports = {
  devServer: {
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    hotOnly: true,
    publicPath: 'http://localhost:9000/assets/',
    port: 9000
  },
  devtool: 'source-map',
  entry: {
    main: './src/client/index.tsx',
    styles: './src/client/styles.build.css'
  },
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
    path: path.resolve(__dirname, 'dist'),
    // webpack-dev-server's `publicPath` doesn't work without this:
    publicPath:
      process.env.NODE_ENV === 'development'
        ? '//localhost:9000/assets/'
        : '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
