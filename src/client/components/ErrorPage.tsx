import { h } from 'preact'
import { RoutableProps } from 'preact-router'

const messages: Record<number, string> = {
  404: 'Could not find it, dude'
}

export const ErrorPage = ({
  code
}: RoutableProps & {
  code?: number
}) => {
  let message =
    typeof code === 'number' && messages[code]
      ? messages[code]
      : "It's a general error"

  return (
    <div class="tc">
      <h1>Oh, no!</h1>
      <p>{message}</p>
    </div>
  )
}
