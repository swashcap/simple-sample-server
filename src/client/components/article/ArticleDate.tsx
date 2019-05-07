import { h } from 'preact'
import clsx from 'clsx'

export interface ArticleDateProps extends JSX.HTMLAttributes {
  date: Date
}

export const ArticleDate = ({
  class: className,
  date,
  ...rest
}: ArticleDateProps) => (
  <time class={clsx('dark-gray db f6', className)} {...rest}>
    {date.toLocaleDateString()}
  </time>
)
