import { h } from 'preact'
import Router from 'preact-router'

import { ErrorPage } from './ErrorPage'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'

export const App = () => (
  <div class="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <ErrorPage code={404} default />
      </Router>
    </main>
    <Footer />
  </div>
)
