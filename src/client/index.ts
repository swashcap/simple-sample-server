import { render } from 'preact'
import { app } from './app'
import { APP_ELEMENT_ID } from '../common/app-element-id'

const root = document.getElementById(APP_ELEMENT_ID)

if (root) {
  render(app, root)
}
