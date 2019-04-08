import { h } from 'preact'
import clsx from 'clsx'

const Wrapper = ({ class: className, ...rest }: JSX.HTMLAttributes) => (
  <div class={clsx('sans-serif', className)} {...rest} />
)

export default Wrapper
