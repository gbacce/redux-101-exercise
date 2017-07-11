export default function(){
  return{
    type: "TIMER_TICK",
    payload: new Date()
  }
}