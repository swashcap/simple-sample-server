import { h } from 'preact'
import clsx from 'clsx'

export interface ButtonProps extends JSX.HTMLAttributes {
  element: keyof JSX.IntrinsicElements
  variant: 'full' | 'hollow'
}

export const Button = ({
  class: className,
  element: Component = 'button',
  variant = 'full',
  ...rest
}: ButtonProps) => (
  <Component
    class={clsx(
      'ba b--dark-green br2 dib dim f5 link pointer ph3 pv2',
      {
        'bg-dark-green white': variant === 'full',
        'bg-white dark-green': variant !== 'full'
      },
      className
    )}
    {...rest}
  />
)
