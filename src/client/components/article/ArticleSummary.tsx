import { h } from 'preact'
import { Link } from 'preact-router'
import clsx from 'clsx'

import { Article } from '../../../common/types'
import { ArticleDate } from './ArticleDate'

export type ArticleSummaryProps = JSX.HTMLAttributes &
  Pick<Article, 'id' | 'published' | 'summary' | 'title'>

export const ArticleSummary = ({
  class: className,
  id,
  published,
  summary,
  title,
  ...rest
}: ArticleSummaryProps) => (
  <article class={clsx('ba b--silver br2', className)} {...rest}>
    <Link class="black db hover-dark-green link pa3" href={`/articles/${id}`}>
      <h1 class="f4 lh-title mt0 mb2">{title}</h1>
      {!!published && <ArticleDate class="mv2" date={published} />}
      <p class="lh-copy ma0">{summary}</p>
    </Link>
  </article>
)
