import 'make-promises-safe'
import dotenv from 'dotenv-safe'

dotenv.config()

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import path from 'path'

import { config } from './config'
import { router } from './routes'

const app = express()

if (config.env !== 'test') {
  app.use(morgan(config.env === 'development' ? 'dev' : 'common'))
}

if (config.env !== 'production') {
  app.use(errorhandler())
}

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../../public')))

const maybeListen = () => {
  if (require.main === module) {
    app.listen(config.port, () =>
      console.log(`Server listening on ${config.port}`)
    )
  }
}

if (config.env === 'development') {
  /**
   * Enable hot reloading during development: the dynamic `require` of the
   * routing middleware works in conjunction with hot-reload-watcher to clear
   * Node.js's module cache and re-`require` the modules.
   *
   * @todo This approach doesn't work for this module or any of its directly
   * `require`-ed modules as they are retained in memory. Look into a fix.
   */
  const { start } = require('./utils/hot-reload-watcher')
  start().then(() => {
    app.use((...args) => require('./routes/index').router(...args))
    maybeListen()
  })
} else {
  app.use(router)
  maybeListen()
}

export default app
