import chokidar from 'chokidar'
import debug from 'debug'
import path from 'path'

const log = debug('sss:hot-reload')

let watcher: chokidar.FSWatcher | undefined

/**
 * **For use in development only!**
 *
 * Hot reload watcher: watch local modules for changes and clear them from
 * Node.js's Modules cache. This works in conjunction with dynamic `require`s
 * that load the server's routes as express middleware.
 *
 * Debug this module by setting the `DEBUG`:
 *
 * ```
 * DEBUG=sss:hot-reload yarn start
 * ```
 *
 * {@link https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e}
 */
export const start = () => {
  if (watcher) {
    return Promise.resolve()
  }

  watcher = chokidar
    .watch(path.resolve(__dirname, '../**/*.js'))
    .on('error', log)

  return new Promise((resolve, reject) => {
    if (!watcher) {
      reject(new Error('No watcher'))
    } else {
      watcher
        .on('change', (p, stats) => {
          log(`change: ${p}`)
          if (!stats || (stats && !stats.isDirectory())) {
            for (const [id] of Object.entries(require.cache)) {
              // Only clear local modules
              if (/^((?!node_modules).)*\.js$/.test(id)) {
                delete require.cache[id]
              }
            }
          }
        })
        .on('ready', () => {
          log('ready')
          resolve()
        })
    }
  })
}

export const stop = () => {
  if (watcher) {
    watcher.close()
    watcher = undefined
  }
}
