import { h, render } from 'preact'

import 'tachyons/css/tachyons.css'

if (process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import { App } from './components/App'
import { APP_ELEMENT_ID } from '../common/app-element-id'
const root = document.getElementById(APP_ELEMENT_ID)

if (root) {
  render(<App />, root, root)
}
