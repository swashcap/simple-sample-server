import { h } from 'preact'

import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <nav>
      <a href={routes.home.path} rel="home">
        Simple Sample Server
      </a>
      <a href={routes.about.path}>About</a>
    </nav>
  </header>
)
