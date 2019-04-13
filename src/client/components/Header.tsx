import { h } from 'preact'

import { Link } from './controls/Link'
import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <nav>
      <Link class="dib pa2" href={routes.home.path} rel="home">
        Simple Sample Server
      </Link>
      <Link class="dib pa2" href={routes.about.path}>
        About
      </Link>
    </nav>
  </header>
)
