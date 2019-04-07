import dotenv from 'dotenv-safe'

dotenv.config()

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import { render } from 'preact-render-to-string'

import { App } from '../client/components/App'
import { template } from './template'

const app = express()
const env = process.env.NODE_ENV

app.use(cors())

if (env !== 'test') {
  app.use(morgan(env === 'development' ? 'dev' : 'common'))
}

if (env === 'development' || env === 'test') {
  app.use(errorhandler())
}

app.get('/', (req, res) => res.send(template({ content: render(App()) })))

if (require.main === module) {
  app.listen(process.env.PORT, () =>
    console.log(`Server listening on ${process.env.PORT}`)
  )
}

export default app
