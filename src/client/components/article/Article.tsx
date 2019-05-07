import { h } from 'preact'

export interface ArticleProps extends JSX.HTMLAttributes {
  title?: string
}

export const Article = ({ children, title, ...rest }: ArticleProps) => (
  <article {...rest}>
    <header>
      <h1 class="f2 lh-title mt0 mb4">{title}</h1>
    </header>
    <div class="measure lh-copy mv3">{children}</div>
  </article>
)
