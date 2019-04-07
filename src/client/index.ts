import { render } from 'preact'

import { App } from './components/App'
import { APP_ELEMENT_ID } from '../common/app-element-id'
const root = document.getElementById(APP_ELEMENT_ID)

if (root) {
  render(App, root)
}
