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

app.use(router)

export { app }
