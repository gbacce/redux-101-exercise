export default function(state = "No one", action) {
  if(action.type == 'SELECT_STUDENT'){
    return action.payload;
  }
  return state;
}