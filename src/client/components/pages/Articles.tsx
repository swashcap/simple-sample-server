import { h, Component } from 'preact'
import { RoutableProps } from 'preact-router'
import fetch from 'isomorphic-fetch'

import { Article, ArticleSerialized } from '../../../common/types'
import { ArticleSummary } from '../article/ArticleSummary'
import { Headline } from '../text/Headline'
import { LoadingIndicator } from '../indicators/LoadingIndicator'
import { Text } from '../text/Text'

export interface ArticlesState {
  articles: Article[]
  error?: Error
  fetched: boolean
}

export class Articles extends Component<RoutableProps, ArticlesState> {
  constructor(props: RoutableProps) {
    super(props)
    this.state = {
      articles: [],
      error: undefined,
      fetched: false
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch('/api/articles')

      if (!response.ok) {
        throw new Error(`Couldn't fetch articles: ${response.status}`)
      }

      const json: ArticleSerialized[] = await response.json()

      this.setState({
        articles: json.map(article => ({
          ...article,
          published: article.published ? new Date(article.published) : undefined
        })),
        error: undefined,
        fetched: true
      })
    } catch (e) {
      this.setState({
        error: e,
        fetched: true
      })
    }
  }

  render(props: RoutableProps, { articles, error, fetched }: ArticlesState) {
    let content

    if (!fetched) {
      content = (
        <LoadingIndicator class="center" style={{ maxWidth: '100px' }} />
      )
    } else if (error) {
      content = <Text>{error.message}</Text>
    } else {
      content = (
        <ol class="list ma0 pa0">
          {articles.map(a => (
            <li class="mv3">
              <ArticleSummary {...a} />
            </li>
          ))}
        </ol>
      )
    }

    return (
      <div class="ph3">
        <Headline class="mt0 mb3">Articles</Headline>
        <div class="cf">
          <div class="fl w-100 w-50-ns">{content}</div>
        </div>
      </div>
    )
  }
}
