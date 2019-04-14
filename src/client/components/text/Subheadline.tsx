import { h } from 'preact'
import clsx from 'clsx'

export interface SubheadlineProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
}

export const Subheadline = ({
  class: className,
  element: Component = 'h2',
  ...rest
}: SubheadlineProps) => (
  <Component class={clsx('f3 fw6 lh-title mb3 mt3', className)} {...rest} />
)
