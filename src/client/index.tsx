import { h, render } from 'preact'

if (process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import { APP_ELEMENT_ID } from '../common/app-element-id'

let el: Element | undefined

const mount = () => {
  const root = document.getElementById(APP_ELEMENT_ID)
  if (root) {
    const { App } = require('./components/App')
    render(<App />, root, root.children[0])
  }
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}

mount()
