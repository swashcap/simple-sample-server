import { h } from 'preact'
import clsx from 'clsx'

import { ArticleDate } from './ArticleDate'

export interface ArticleSummaryProps extends JSX.HTMLAttributes {
  published?: Date
  summary?: string
  title?: string
}

export const ArticleSummary = ({
  class: className,
  published,
  summary,
  title,
  ...rest
}: ArticleSummaryProps) => (
  <article class={clsx('ba b--silver br2', className)} {...rest}>
    <a class="black db hover-dark-green link pa3" href="#">
      <h1 class="f4 lh-title mt0 mb2">{title}</h1>
      {!!published && <ArticleDate class="mv2" date={published} />}
      <p class="lh-copy ma0">{summary}</p>
    </a>
  </article>
)
