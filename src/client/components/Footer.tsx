import { h } from 'preact'

import { Caption } from './text/Caption'

export const Footer = () => (
  <footer class="bt b--gray pt3 tr" role="contentinfo">
    <Caption class="db mid-gray" element="small">
      Source code{' '}
      <a
        class="dim link mid-gray underline"
        href="https://github.com/swashcap/simple-sample-server"
      >
        on GitHub
      </a>
    </Caption>
  </footer>
)
