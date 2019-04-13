import { h } from 'preact'
import clsx from 'clsx'

export const Link = ({ class: className, ...rest }: JSX.HTMLAttributes) => (
  <a class={clsx('dark-green dim link underline', className)} {...rest} />
)
