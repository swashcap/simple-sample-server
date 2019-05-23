import { NightwatchBrowser, NightwatchTestFunctions } from 'nightwatch'

import { APP_ELEMENT_ID } from '../src/common/app-element-id'
import { routes } from '../src/common/routes'

const articles: NightwatchTestFunctions = {
  '@tags': ['web', 'articles'],
  'Articles page': (browser: NightwatchBrowser) => {
    browser
      .url(`${browser.launchUrl}${routes.articles.path}`)
      .waitForElementVisible(`#${APP_ELEMENT_ID} article`)

    // TODO: Update nightwatch types
    // @ts-ignore
    browser.expect.elements(`#${APP_ELEMENT_ID} article`).count.to.equal(3)
  },
  'Single article page': (browser: NightwatchBrowser) => {
    browser
      .click(`#${APP_ELEMENT_ID} article:first-child a`)
      .assert.urlContains(routes.articles.path)
      .end()
  }
}

module.exports = articles
