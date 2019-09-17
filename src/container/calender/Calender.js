import React, { Component } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import AddTask from "../addTask/AddTask";
import ShowTask from "../showTasks/ShowTasks";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default class Calender extends Component {
  state = { date: new Date() };

  handleDateChange = date => {
    this.setState({ date })
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            format="MM/dd/yyyy"
            value={date}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
        <AddTask date={date} />
        <ShowTask date={date} />
      </div>
    );
  }
}
