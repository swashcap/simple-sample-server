import { h } from 'preact'
import { Link } from 'preact-router/match'

import { linkActiveClass, linkClass } from './controls/Link'
import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <nav>
      <Link
        activeClassName={'fw7'}
        class={`${linkClass} dib pa2`}
        href={routes.home.path}
        rel="home"
      >
        Simple Sample Server
      </Link>
      <Link
        activeClassName={'fw7'}
        class={`${linkClass} dib pa2`}
        href={routes.about.path}
      >
        About
      </Link>
    </nav>
  </header>
)
