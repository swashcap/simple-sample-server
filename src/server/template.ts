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
    <div id="app">
      ${content}
    </div>
  </body>
</html>`
