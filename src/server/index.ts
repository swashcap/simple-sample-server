import dotenv from 'dotenv-safe'

dotenv.config()

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import path from 'path'

import { config } from './config'
import { ssr } from './ssr'

const app = express()

app.use(cors())

if (config.env !== 'test') {
  app.use(morgan(config.env === 'development' ? 'dev' : 'common'))
}

if (config.env === 'development' || config.env === 'test') {
  app.use(errorhandler())
}

app.use(express.static(path.resolve(__dirname, '../../public')))
app.get('*', ssr())

if (require.main === module) {
  app.listen(config.port, () =>
    console.log(`Server listening on ${config.port}`)
  )
}

export default app
