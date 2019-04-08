module.exports = {
  components: 'src/client/components/**/*.{ts,tsx}',
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.resolve = {
      ...webpackConfig.resolve,
      alias: {
        ...webpackConfig.resolve.alias,
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }
    }

    return webpackConfig
  },
  require: ['./rsg/bootstrap.ts'],
  skipComponentsWithoutExample: true
}
