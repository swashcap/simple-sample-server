import { h } from 'preact'
import { RouterProps as RoutableProps } from 'preact-router'

import { Headline } from './text/Headline'
import { Text } from './text/Text'
import { Link } from './controls/Link'
import { Subheadline } from './text/Subheadline'

export const Home = (props: RoutableProps) => (
  <div>
    <Headline class="mt0">Hello, world!</Headline>
    <Text class="measure mv3" element="p">
      This is the demo for an{' '}
      <Link href="https://en.wikipedia.org/wiki/Isomorphic_JavaScript">
        isomorphic JavaScript application
      </Link>
      . It’s built with <Link href="https://expressjs.com/">Express</Link>, and{' '}
      <Link href="https://preactjs.com/">Preact</Link>, styled with{' '}
      <Link href="http://tachyons.io/">Tachyons</Link>, and bundled with{' '}
      <Link href="https://webpack.js.org/">webpack</Link>.
    </Text>
    <Text class="measure mv3" element="p">
      The code is written in{' '}
      <Link href="https://www.typescriptlang.org/">TypeScript</Link>, and is
      100% open source: view it{' '}
      <Link href="https://github.com/swashcap/simple-sample-server">
        at <strong>swashcap/simple-sample-server</strong> on GitHub
      </Link>
      .
    </Text>
    <Subheadline>Why?</Subheadline>
    <Text class="measure mv3" element="p">
      Isomorphic JavaScript applications are relatively simple to configure.
      This shows how!
    </Text>
  </div>
)
