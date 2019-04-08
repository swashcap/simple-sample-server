import { RequestHandler } from 'express'
import { h } from 'preact'
import { render } from 'preact-render-to-string'

import { APP_ELEMENT_ID } from '../common/app-element-id'
import { routes } from '../common/routes'
import { App } from '../client/components/App'

const routePaths = Object.values(routes)

/**
 * Base HTML template for server-side rendered content.
 */
export const template = ({
  content = '',
  title = ''
}: {
  content?: string
  title?: string
}) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="${APP_ELEMENT_ID}">
      ${content}
    </div>
  </body>
</html>`

export const ssr = (): RequestHandler => ({ path }, res) => {
  const body = template({ content: render(<App initialUrl={path} />) })

  if (!routePaths.includes(path)) {
    return res.status(404).send(body)
  }

  res.send(body)
}
