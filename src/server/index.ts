import 'dotenv-safe/config'
import 'make-promises-safe'

import http from 'http'

import { app } from './app'
import { config } from './config'
import { getHotReloadWatcher } from './utils/hot-reload-watcher'

let server: http.Server

const maybeListen = (srv: http.Server) => {
  if (require.main === module) {
    srv.listen(config.port, () =>
      console.log(`Server listening on ${config.port}`)
    )
  }
}

if (config.env === 'development') {
  /**
   * Enable hot reloading during development: the dynamic `require` of the
   * express `app` works in conjunction with hot-reload-watcher to clear
   * Node.js's module cache and re-`require` the modules.
   *
   * @todo This approach doesn't work for this module or any of its directly
   * `require`-ed modules as they are retained in memory. Look into a fix.
   */
  let devApp = require('./app').app
  server = http.createServer(devApp)

  getHotReloadWatcher({
    onChange() {
      server.removeListener('request', devApp)
      devApp = require('./app').app
      server.on('request', devApp)
    },
    onReady() {
      maybeListen(server)
    }
  })
} else {
  server = http.createServer(app)
  maybeListen(server)
}

export { server }
