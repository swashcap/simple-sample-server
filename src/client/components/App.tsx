import { h } from 'preact'
import Router from 'preact-router'

import { About } from './About'
import { ErrorPage } from './ErrorPage'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import { MaxWidth } from './layout/MaxWidth'
import { routes } from '../../common/routes'

export const App = ({ initialUrl }: { initialUrl?: string }) => (
  <div class="app">
    <Header />
    <main class="mb5 mt3">
      <MaxWidth>
        <Router url={initialUrl}>
          <Home path={routes.home.path} />
          <About path={routes.about.path} />
          <ErrorPage code={404} default />
        </Router>
      </MaxWidth>
    </main>
    <Footer />
  </div>
)
