import { h } from 'preact'

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
      {!!published && (
        <time class="dark-gray db f6 mv2">
          {published.toLocaleDateString()}
        </time>
      )}
    </header>
    <div class="measure lh-copy mv3">{children}</div>
  </article>
)
