import { h } from 'preact'

import { ArticleDate } from './ArticleDate'

export interface ArticleProps extends JSX.HTMLAttributes {
  published?: Date
  title?: string
}

export const Article = ({
  children,
  published,
  title,
  ...rest
}: ArticleProps) => (
  <article {...rest}>
    <header>
      <h1 class="f2 lh-title mt0 mb4">{title}</h1>
      {!!published && <ArticleDate class="mv2" date={published} />}
    </header>
    <div class="measure lh-copy mv3">{children}</div>
  </article>
)
