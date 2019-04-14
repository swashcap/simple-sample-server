const path = require('path')

module.exports = {
  components: 'src/**/*.{ts,tsx}',
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.resolve = {
      ...webpackConfig.resolve,
      alias: {
        ...webpackConfig.resolve.alias,
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }
    }
    delete webpackConfig.devServer

    return webpackConfig
  },
  ignore: ['src/server/**/*'],
  require: ['./rsg/bootstrap.ts', './node_modules/tachyons/css/tachyons.css'],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'rsg/Wrapper.tsx')
  }
}
