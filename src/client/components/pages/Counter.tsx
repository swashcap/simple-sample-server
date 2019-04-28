import { Component, h } from 'preact'
import { RoutableProps } from 'preact-router'

import { NumericPicker } from '../controls/NumericPicker'

export interface CounterProps extends RoutableProps {}

export class Counter extends Component<CounterProps> {
  render() {
    return (
      <div>
        <NumericPicker max={10} />
      </div>
    )
  }
}
