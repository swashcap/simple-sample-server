import dotenv from 'dotenv-safe';

dotenv.config()

import cors from 'cors';
import express from 'express'
import morgan from 'morgan'


const app = express();

app.use(cors);

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common'))
}

app.get('/', (req, res) => res.send('Hello World!'))


if (require.main === module) {
  app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`))
}

export default app;
