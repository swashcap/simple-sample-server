import { h } from 'preact'

import { Caption } from '../text/Caption'
import { MaxWidth } from './MaxWidth'

export const Footer = () => (
  <footer class="bt b--black-20 tr" role="contentinfo">
    <MaxWidth class="pa3">
      <Caption class="db mid-gray" element="small">
        Source code{' '}
        <a
          class="dim link mid-gray underline"
          href="https://github.com/swashcap/simple-sample-server"
        >
          on GitHub
        </a>
      </Caption>
    </MaxWidth>
  </footer>
)
