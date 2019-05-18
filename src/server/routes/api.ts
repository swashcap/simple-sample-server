import uuidv4 from 'uuid/v4'
import { RequestHandler } from 'express'

import { Article } from '../../common/types'

const data: Article[] = [
  {
    body:
      '<p>Dapibus at imperdiet non, ultricies ut risus.</p><p>Nunc faucibus leo in augue sodales eget rhoncus dolor lobortis. Fusce pulvinar ipsum eu augue pharetra at congue arcu aliquam.</p><p>Cras in sem dui. Nam a elit purus. Fusce fermentum condimentum nunc vel pulvinar. Donec quis leo non nisl egestas aliquam id eget elit.</p>',
    id: uuidv4(),
    published: new Date(2019, 1, 15),
    summary: 'Dapibus at imperdiet non, ultricies ut risus.',
    title: 'Morbi Est Tellus'
  },
  {
    body:
      '<p>Maecenas consectetur, odio at elementum vehicula, elit ante imperdiet enim, vel luctus leo metus quis tortor.</p><h2>Suspendisse potenti</h2><p>Nam eget purus mi. Maecenas eleifend tempus erat, eget fringilla lorem venenatis et. Curabitur dui nisi, mattis non ultrices at, adipiscing eget libero.</p><p>Integer consequat quam vitae diam lacinia tristique. Donec malesuada blandit feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in semper lacus. Vestibulum ut nulla non massa imperdiet condimentum. Sed nulla tortor, tristique aliquam elementum id, ullamcorper sit amet turpis. Donec volutpat viverra turpis, nec tristique dui aliquet non. Maecenas justo lorem, vestibulum eu feugiat vitae.</p>',
    id: uuidv4(),
    published: new Date(2019, 2, 19),
    summary:
      'Maecenas consectetur, odio at elementum vehicula, elit ante imperdiet enim',
    title: 'Praesent Laoreet Gravida Fermentum'
  },
  {
    body:
      '<p>Vivamus sed nisl vitae arcu adipiscing lacinia ac a dui. Cras hendrerit, tortor sed pharetra dapibus, nisl justo dapibus arcu, volutpat placerat quam massa vel lectus.</p>',
    id: uuidv4(),
    published: new Date(2019, 3, 20),
    title: 'Ultrices Nec Ipsum'
  }
]

export const articles: RequestHandler = (req, res) => {
  res.send(data)
}

export const article: RequestHandler = ({ params }, res) => {
  if (params.id) {
    return res.status(400)
  }

  const article = data.find(({ id }) => id === params.id)

  if (!article) {
    return res.status(400)
  }

  res.send(article)
}
