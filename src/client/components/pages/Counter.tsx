import { Component, h } from 'preact'
import { RoutableProps } from 'preact-router'

import { Headline } from '../text/Headline'
import { Text } from '../text/Text'
import { Link } from '../controls/Link'
import { NumericPicker } from '../controls/NumericPicker'

export interface CounterProps extends RoutableProps {}

export interface CounterState {
  value: number
}

export class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      value: 1
    }
  }

  onDecrease = (value: number) => {
    this.setState({ value })
  }

  onIncrease = (value: number) => {
    this.setState({ value })
  }

  render(props: CounterProps, { value }: CounterState) {
    return (
      <div class="cf ph3">
        <div class="fl w-100 w-50-ns">
          <Headline class="mt0">Counter</Headline>
          <Text class="mv3" element="p">
            This is demos a{' '}
            <Link href="https://preactjs.com/guide/api-reference#preact-component">
              stateful Preact component
            </Link>{' '}
            that controls an <code>&lt;input&nbsp;/&gt;</code> wrapped in a
            picker component with increment and decrement buttons.
          </Text>
          <NumericPicker
            class="center mt4"
            max={10}
            min={0}
            onDecreaseClick={this.onDecrease}
            onIncreaseClick={this.onIncrease}
            style={{
              maxWidth: '160px'
            }}
            value={value}
          />
        </div>
      </div>
    )
  }
}
