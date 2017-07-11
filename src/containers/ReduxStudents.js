import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent'
import {bindActionCreators} from 'redux'
import Timer from '../actions/TimerAction'


class ReduxStudents extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    setInterval(()=>{
      this.props.timerAction();
    }, 1000)
  }

  render() {
    var studentArray = [];
    this.props.students.map((student,index)=>{
      studentArray.push(
        <li key={index} onClick={()=> {this.props.selectStudent(student)}}>
          {student}
        </li>)
    })
    return(
      <div>
        <p>Time: {this.props.timer}</p>
        <h1>This is ReduxStudents</h1>
        {studentArray}
        <hr />
        {this.props.selectedStudent} is selected.
      </div>
    )
  }
} 

// All containers that need access to state will include this function.
// This creates a mapping between redux state and this component's props.
function mapStateToProps(state){
  return {
    students: state.students,
    selectedStudent: state.selectedStudent,
    timer: state.timer
  }
}

// mapDispatchToProps goes out to the dispatcher, grabs an action from it, and sets it as a prop of this component
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectStudent: SelectStudent,
    timerAction: Timer
  }, dispatch)
}

// The reason it is state.students is because the argument is "state". If the argument were carrot, it would be carrot.students.
// Connect takes 2 arguments which return a function that takes 1 argument
//  Connect takes state mapping function
//  Connect takes action mapping function
// The return function of the connect function takes a component
export default connect(mapStateToProps, mapDispatchToProps)(ReduxStudents);