import { h } from 'preact'
import clsx from 'clsx'

import { Text } from '../text/Text'

export interface ButtonProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
  variant?: 'full' | 'hollow'
}

export const Button = ({
  class: className,
  children,
  disabled,
  element: Component = 'button',
  variant = 'full',
  ...rest
}: ButtonProps) => (
  <Component
    class={clsx(
      'button-reset ba br2 dib link ph3 pv1',
      {
        'b--dark-green dim pointer': !disabled,
        'b--gray': !!disabled,
        white: variant === 'full',
        'bg-white': variant !== 'full',
        'bg-dark-green': variant === 'full' && !disabled,
        'dark-green': variant !== 'full' && !disabled,
        'bg-gray': variant === 'full' && !!disabled,
        gray: variant !== 'full' && !!disabled
      },
      className
    )}
    disabled={disabled}
    {...rest}
  >
    <Text>{children}</Text>
  </Component>
)
