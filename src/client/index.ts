import { render } from 'preact'
import { app } from './app'

const root = document.getElementById('root')

if (root) {
  render(app, root)
}
