import { h } from 'preact'
import clsx from 'clsx'

export const MaxWidth = ({ class: className, ...rest }: JSX.HTMLAttributes) => (
  <div className={clsx('center mw8 ph3', className)} {...rest} />
)
