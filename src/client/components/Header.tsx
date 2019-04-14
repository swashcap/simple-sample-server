import { h } from 'preact'

import { Link } from './controls/Link'
import { MaxWidth } from './layout/MaxWidth'
import { routes } from '../../common/routes'

export const Header = () => (
  <header role="banner">
    <MaxWidth>
      <nav>
        <Link class="dib pa2" href={routes.home.path} rel="home">
          Simple Sample Server
        </Link>
        <Link class="dib pa2" href={routes.about.path}>
          About
        </Link>
      </nav>
    </MaxWidth>
  </header>
)
