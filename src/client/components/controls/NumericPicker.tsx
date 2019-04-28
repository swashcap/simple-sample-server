import { h, Component } from 'preact'
import clsx from 'clsx'

// import './Input.css'
import { Button } from './Button'
import { Input } from './Input'

export interface NumericPickerProps extends JSX.HTMLAttributes {
  /** Properties to pass to `Input` */
  inputProps?: JSX.HTMLAttributes
  /** Maximum value */
  max?: number
  /** Minimum value */
  min?: number
  onDecreaseClick?: (newValue: number, event: MouseEvent) => void
  onIncreaseClick?: (newValue: number, event: MouseEvent) => void
  value?: number
}

export interface NumericPickerState {
  value: number
}

/**
 * A controlled increase/decrease numeric input.
 */
export class NumericPicker extends Component<
  NumericPickerProps,
  NumericPickerState
> {
  constructor(props: NumericPickerProps) {
    super(props)

    this.state = {
      value: props.value || 0
    }
  }

  componentWillReceiveProps({ value }: NumericPickerProps) {
    if (typeof value === 'number') {
      this.setState({ value })
    }
  }

  handleDecreaseClick = (event: MouseEvent) => {
    const value = this.state.value - 1

    if (!this.props.min || value >= this.props.min) {
      this.setState({ value })

      if (this.props.onDecreaseClick) {
        this.props.onDecreaseClick(value, event)
      }
    }
  }

  handleIncreaseClick = (event: MouseEvent) => {
    const value = this.state.value + 1

    if (!this.props.max || value <= this.props.max) {
      this.setState({ value })

      if (this.props.onIncreaseClick) {
        this.props.onIncreaseClick(value, event)
      }
    }
  }

  render(
    {
      class: className,
      inputProps: { class: inputClassName, value: v, ...inputRest } = {},
      max,
      min,
      ...rest
    }: NumericPickerProps,
    { value }: NumericPickerState
  ) {
    return (
      <div class={clsx('flex', className)} {...rest}>
        <Button
          aria-label="Decrease"
          disabled={typeof min === 'number' && value <= min}
          role="button"
          onClick={this.handleDecreaseClick}
          type="button"
          variant="hollow"
        >
          -
        </Button>
        <Input
          class={clsx('mh2 tc', inputClassName)}
          readOnly
          type="number"
          value={value}
          {...inputRest}
        />
        <Button
          aria-label="Increase"
          disabled={typeof max === 'number' && value >= max}
          role="button"
          onClick={this.handleIncreaseClick}
          type="button"
          variant="hollow"
        >
          +
        </Button>
      </div>
    )
  }
}
