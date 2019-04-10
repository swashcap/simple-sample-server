export interface Config {
  env: 'development' | 'production' | 'test'
  port: number
}

let env: Config['env']
let port: Config['port']

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  env = process.env.NODE_ENV
} else {
  env = 'production'
}

if (Number.isNaN(parseInt(process.env.PORT!))) {
  throw new Error('PORT is NaN')
}

port = parseInt(process.env.PORT!)

export const config: Config = {
  env,
  port
}
