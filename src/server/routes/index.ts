import { RequestHandler, Router } from 'express'

import { articles } from './api'
import { ssr } from './ssr'

/**
 * Expose the application's routes as middleware using `express.Router`.
 *
 * This helps clean up application bootstrapping and enables hot reloading for
 * Node.js modules.
 *
 * {@link https://expressjs.com/en/guide/routing.html#express-router}
 */
export const router: RequestHandler = (...args) => {
  const r = Router()
  r.get('/api/articles', articles)
  r.get('*', ssr())
  return r(...args)
}
