import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class CheckboxControl extends Component {
  state = { checked: this.props.task.isCompleted }
  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  render() {
    return (
      <div>
        <Checkbox
          label={this.props.task.taskName}
          onChange={this.toggle}
          checked={this.state.checked}
        />
      </div>
    )
  }
}