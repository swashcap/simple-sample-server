import { h } from 'preact'
import { RoutableProps } from 'preact-router'

import { Headline } from '../text/Headline'
import { Text } from '../text/Text'

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
      <Headline class="mt0 mb3">Oh, no!</Headline>
      <Text class="m0">{message}</Text>
    </div>
  )
}
