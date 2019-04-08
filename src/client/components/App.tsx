import { h } from 'preact'
import Router from 'preact-router'

import { About } from './About'
import { ErrorPage } from './ErrorPage'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import { routes } from '../../common/routes'

export const App = ({ initialUrl }: { initialUrl?: string }) => (
  <div class="app">
    <Header />
    <main>
      <Router url={initialUrl}>
        <Home path={routes.home} />
        <About path={routes.about} />
        <ErrorPage code={404} default />
      </Router>
    </main>
    <Footer />
  </div>
)
