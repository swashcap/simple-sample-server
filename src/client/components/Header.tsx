import { h } from 'preact'

import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <nav>
      <a
        class="dark-green dib dim link pa2 underline"
        href={routes.home.path}
        rel="home"
      >
        Simple Sample Server
      </a>
      <a class="dark-green dib dim link pa2 underline" href={routes.about.path}>
        About
      </a>
    </nav>
  </header>
)
