import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { firebaseRef } from '../../firebase'

class AddTask extends Component {
  state = {
      task: ''
  }

  handleChange = (e, { value }) => {
      this.setState({ task: value });
  }

  handleSubmit = () => {

    firebaseRef.push().set(this.state.task);
    this.setState({ task: ''})
    }

  render() {
    const { task } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Please add your task'
            name='name'
            value={task}
            onChange={this.handleChange}
          />
          <Form.Button content='Submit Task' />
        </Form.Group>
      </Form>
    )
  }
}

export default AddTask