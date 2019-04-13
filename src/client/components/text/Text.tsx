import { h } from 'preact'
import clsx from 'clsx'

export interface TextProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
}

export const Text = ({
  class: className,
  element: Component = 'span',
  ...rest
}: TextProps) => <Component class={clsx('f5 lh-copy', className)} {...rest} />
