import { h } from 'preact'
import clsx from 'clsx'

export const LoadingIndicator = ({
  class: className,
  ...rest
}: JSX.HTMLAttributes) => (
  <div
    aria-label="Loading"
    class={clsx('LoadingIndicator', className)}
    {...rest}
  >
    <div class="ba b--black-20 br2 pa1">
      <div class="LoadingIndicator-row br3" />
      <div class="LoadingIndicator-row br3 mt1" />
      <div class="LoadingIndicator-row br3 mt1" />
    </div>
  </div>
)
