import { h } from 'preact'
import clsx from 'clsx'

export interface HeadlineProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
}

export const Headline = ({
  class: className,
  element: Component = 'h1',
  ...rest
}: HeadlineProps) => (
  <Component class={clsx('f1 fw5 lh-title mv3', className)} {...rest} />
)
