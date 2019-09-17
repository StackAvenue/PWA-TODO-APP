import React, { Component } from 'react'
import { format } from "date-fns";
import { firestore } from '../../firebase'
import  CheckboxControl  from '../checkboxes/CheckBoxes'

class ShowTask extends Component {
  state = {
      tasks: [],
      checked: false 
  }

  toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

  componentDidMount = async () => {
    let tasks;
    const snapshot =  await firestore.collection('task').doc(format(this.props.date, "yyyy-MM-dd")).get();
    snapshot.data() ? tasks =  snapshot.data().taskArray : tasks = [];
    console.log('snapshot', snapshot.data());

    this.setState({tasks});
    console.log(this.state.tasks);
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