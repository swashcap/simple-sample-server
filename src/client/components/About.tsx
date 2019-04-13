import { h } from 'preact'
import { RoutableProps } from 'preact-router'

import { Headline } from './text/Headline'
import { Text } from './text/Text'

export const About = (props: RoutableProps) => (
  <div>
    <Headline class="mt0 mb3">About</Headline>
    <Text class="mt0 mb3" element="p">
      Proin vestibulum nunc in metus cursus at aliquam neque mollis. Curabitur
      hendrerit porta nibh, a dignissim diam tempor eu. Nam id erat dictum velit
      facilisis tincidunt. Etiam auctor, felis et auctor blandit, eros quam
      aliquam orci, ac mollis neque dui vitae arcu. Fusce fringilla lectus ut
      ipsum condimentum a egestas odio pretium. Fusce vehicula erat a eros
      fermentum vestibulum. In a nisi eu dolor adipiscing facilisis sed et est.
      Suspendisse potenti. Praesent nec nulla elit, sit amet molestie metus.
      Curabitur consectetur, ipsum sit amet fringilla imperdiet, nisi nulla
      pharetra nunc, et consectetur nulla nisl a dolor. Phasellus suscipit ipsum
      nec purus luctus ut euismod nisi dapibus. Vestibulum eget metus in lorem
      dignissim condimentum mattis non lorem.
    </Text>
    <Text class="mt0 mb3" element="p">
      Morbi est tellus, dapibus at imperdiet non, ultricies ut risus. Nunc
      faucibus leo in augue sodales eget rhoncus dolor lobortis. Fusce pulvinar
      ipsum eu augue pharetra at congue arcu aliquam. Cras in sem dui. Nam a
      elit purus. Fusce fermentum condimentum nunc vel pulvinar. Donec quis leo
      non nisl egestas aliquam id eget elit. Vivamus sed nisl vitae arcu
      adipiscing lacinia ac a dui. Cras hendrerit, tortor sed pharetra dapibus,
      nisl justo dapibus arcu, volutpat placerat quam massa vel lectus.
    </Text>
  </div>
)
