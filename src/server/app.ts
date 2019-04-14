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

/**
 * Serve compiled assets when running in "production" mode.
 *
 * @todo Assets should be pushed to a CDN or served by nginx.
 */
if (config.env === 'production') {
  app.use(
    '/dist',
    express.static(path.resolve(__dirname, '../../dist/'), {
      index: false
    })
  )
}

app.use(router)

export { app }
