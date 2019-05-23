import { NightwatchBrowser, NightwatchTestFunctions } from 'nightwatch'

import { APP_ELEMENT_ID } from '../src/common/app-element-id'

const home: NightwatchTestFunctions = {
  '@tags': ['web', 'home'],
  'Home page': (browser: NightwatchBrowser) => {
    browser
      .url(browser.launchUrl)
      .assert.elementPresent(`#${APP_ELEMENT_ID}`)
      .assert.containsText(`#${APP_ELEMENT_ID}`, 'Hello, world!')
      .end()
  }
}

module.exports = home
