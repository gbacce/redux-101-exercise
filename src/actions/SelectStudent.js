var SelectStudent = function(student){
  console.log(student)
  return{
    type: "SELECT_STUDENT",
    payload: student
  }
}

export default SelectStudent;