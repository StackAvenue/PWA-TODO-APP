import { format } from "date-fns";
import React, { Component } from "react";
import * as firebase from "firebase";
import { Form } from "semantic-ui-react";
import { firestore } from "../../firebase";

class AddTask extends Component {
  state = {
    task: {
      isCompleted: false,
      taskName: ""
    }
  };

  handleChange = (e, { value }) => {
    this.setState(prevState => ({
      task: {
        ...prevState.task,
        taskName: value
      }
    }));
  };

  handleSubmit = () => {
    const { task } = this.state;
    const taskRef = firestore
      .collection("task")
      .doc(format(this.props.date, "yyyy-MM-dd"));
    taskRef.get().then(doc => {
      if (doc.exists) {
        taskRef.update({
          taskArray: firebase.firestore.FieldValue.arrayUnion(task)
        })
        .then( () => {
          this.updateTask();
        })
      } else {
        taskRef.set({ taskArray: [task] })
        .then( () => {
          this.updateTask();
        })
      }
    });
  };

  updateTask() {
    this.setState({
      task: {
        isCompleted: false,
        taskName: ""
      }
    });
  }

  render() {
    const { task } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Please add your task"
            name="name"
            value={task.taskName}
            onChange={this.handleChange}
          />
          <Form.Button content="Submit Task" />
        </Form.Group>
      </Form>
    );
  }
}

export default AddTask;
