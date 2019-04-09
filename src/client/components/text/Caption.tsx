import { h } from 'preact'
import clsx from 'clsx'

export interface CaptionProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
}

export const Caption = ({
  class: className,
  element: Component = 'span',
  ...rest
}: CaptionProps) => (
  <Component class={clsx('f6 lh-copy', className)} {...rest} />
)
