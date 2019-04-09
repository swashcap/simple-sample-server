import { h } from 'preact'
import clsx from 'clsx'

import { Text } from './text/Text'

export interface ButtonProps extends JSX.HTMLAttributes {
  element: keyof JSX.IntrinsicElements
  variant: 'full' | 'hollow'
}

export const Button = ({
  class: className,
  children,
  element: Component = 'button',
  variant = 'full',
  ...rest
}: ButtonProps) => (
  <Component
    class={clsx(
      'ba b--dark-green br2 dib dim link pointer ph3 pv1',
      {
        'bg-dark-green white': variant === 'full',
        'bg-white dark-green': variant !== 'full'
      },
      className
    )}
    {...rest}
  >
    <Text>{children}</Text>
  </Component>
)
