import { RequestHandler } from 'express'
import { h } from 'preact'
import { render } from 'preact-render-to-string'
import status from 'statuses'

import { APP_ELEMENT_ID } from '../../common/app-element-id'
import { routes } from '../../common/routes'
import { App } from '../../client/components/App'

const routeObjs = Object.values(routes)

/**
 * Base HTML template for server-side rendered content.
 */
export const template = ({
  content = '',
  description = '',
  title = ''
}: {
  content?: string
  description?: string
  title?: string
}) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body class="sans-serif w-100">
    <div id="${APP_ELEMENT_ID}">
    ${content}
    </div>
    <script src="//localhost:9000/main.bundle.js"></script>
  </body>
</html>`

export const ssr = (): RequestHandler => ({ path }, res) => {
  // TODO: See if preact-router has a match function
  const match = routeObjs.find(({ path: p }) => p === path)
  const content = render(h(App, { initialUrl: path }))

  if (!match) {
    return res.status(404).send(template({ content, title: status[404] }))
  }

  res.send(template({ content, title: match.title }))
}
