import { h } from 'preact'

import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <nav>
      <a href={routes.home} rel="home">
        Simple Sample Server
      </a>
      <a href={routes.about}>About</a>
    </nav>
  </header>
)
