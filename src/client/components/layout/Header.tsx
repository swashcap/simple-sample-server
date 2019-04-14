import { h } from 'preact'

import { Link } from '../controls/Link'
import { MaxWidth } from './MaxWidth'
import { routes } from '../../../common/routes'

export const Header = () => (
  <header class="bb b--black-20" role="banner">
    <MaxWidth>
      <nav>
        <Link class="dib pv3" href={routes.home.path} rel="home">
          Simple Sample Server
        </Link>
        <Link class="dib mh3 pv3" href={routes.about.path}>
          About
        </Link>
        <Link class="dib mh3 pv3" href={routes.counter.path}>
          Counter
        </Link>
      </nav>
    </MaxWidth>
  </header>
)
