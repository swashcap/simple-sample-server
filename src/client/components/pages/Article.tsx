import { h, Component } from 'preact'
import { RoutableProps } from 'preact-router'
import fetch from 'isomorphic-fetch'

import {
  Article as ArticleType,
  ArticleSerialized
} from '../../../common/types'
import { Article } from '../article/Article'
import { LoadingIndicator } from '../indicators/LoadingIndicator'
import { Text } from '../text/Text'

export interface ArticlePageProps extends RoutableProps {
  articleId?: string
}

export interface ArticlePageState {
  article?: ArticleType
  error?: Error
  fetched: boolean
}

export class ArticlePage extends Component<ArticlePageProps, ArticlePageState> {
  constructor(props: ArticlePageProps) {
    super(props)

    this.state = {
      fetched: false
    }
  }

  async componentDidMount() {
    const { articleId } = this.props

    try {
      const response = await fetch(`/api/articles/${articleId}`)

      if (!response.ok) {
        throw new Error(`Couldn't fetch article: ${response.status}`)
      }

      const json: ArticleSerialized = await response.json()

      this.setState({
        article: {
          ...json,
          published: json.published ? new Date(json.published) : undefined
        },
        fetched: true
      })
    } catch (error) {
      this.setState({
        error,
        fetched: true
      })
    }
  }

  render(
    props: ArticlePageProps,
    { article, error, fetched }: ArticlePageState
  ) {
    const articleId = props.articleId!
    let content

    if (!fetched) {
      content = (
        <LoadingIndicator class="center" style={{ maxWidth: '100px' }} />
      )
    } else if (error) {
      content = <Text>{error.message}</Text>
    } else {
      content = <Article id={articleId} {...article} />
    }

    return (
      <div class="cf ph3">
        <div class="fl w-100 w-50-ns">{content}</div>
      </div>
    )
  }
}
