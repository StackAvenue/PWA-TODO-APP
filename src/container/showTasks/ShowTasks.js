import React, { Component } from 'react'
import { firebaseRef } from '../../firebase'
import  CheckboxControl  from '../checkboxes/CheckBoxes'

class ShowTask extends Component {
  state = {
      tasks: [],
      checked: false 
  }

  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  componentDidMount() {
      firebaseRef.on('value', snap => {
        this.setState({ tasks: Object.values(snap.val()) })
      })
  }

  render() {
    const { tasks } = this.state

    return (
      <div>The tasks are:
          <div> 
          <ul>
              {tasks.map((task)=>
                <div>
                  <CheckboxControl task={task}>
                  </CheckboxControl>
                 </div>
            )}
          </ul>
      </div>
      </div>
      
    )
  }
}

export default ShowTask