const chromedriver = require('chromedriver')
const seleniumServer = require('selenium-server')
module.exports = {
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  src_folders: ['tests'],

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
