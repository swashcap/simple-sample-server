import { h } from 'preact'
import clsx from 'clsx'

export interface LinkProps extends JSX.HTMLAttributes {
  element?: keyof JSX.IntrinsicElements
}

/**
 * @todo Reuse of `preact.AnyComponent` through the `element` property doesn't
 * work with preact-router's `Link`, thus the exported class list. Make it work!
 */

export const linkClass = 'dark-green dim link underline'

export const linkActiveClass = 'fw7'

export const Link = ({
  class: className,
  element: Component = 'a',
  ...rest
}: LinkProps) => <Component class={clsx(linkClass, className)} {...rest} />
