import { h } from 'preact'
import Router from 'preact-router'

import { About } from './pages/About'
import { Counter } from './pages/Counter'
import { ErrorPage } from './pages/ErrorPage'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { Home } from './pages/Home'
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
          <Counter path={routes.counter.path} />
          <ErrorPage code={404} default />
        </Router>
      </MaxWidth>
    </main>
    <Footer />
  </div>
)
