import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxStudents extends Component {
  render() {
    console.log(this.props.students)
    var studentArray = [];
    this.props.students.map((student,index)=>{
      studentArray.push(<li key={index}>{student}</li>)
    })
    return(
      <div>
        <h1>This is ReduxStudents</h1>
        {studentArray}
      </div>
    )
  }
} 

// All containers that need access to state will include this function.
// This creates a mapping between redux state and this component's props.
function mapStateToProps(state){
  return {
    students: state.students
  }
}
// The reason it is state.students is because the argument is "state". If the argument were carrot, it would be carrot.students.

export default connect(mapStateToProps)(ReduxStudents);