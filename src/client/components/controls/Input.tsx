import { h } from 'preact'
import clsx from 'clsx'

export const Input = ({ class: className, ...rest }: JSX.HTMLAttributes) => (
  <input
    class={clsx(
      'input-reset ba b--black-40 br2 f5 lh-copy ph2 pv1 w-100',
      className
    )}
    {...rest}
  />
)
