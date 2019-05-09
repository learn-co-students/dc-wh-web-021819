const initialState = {
  count: 123
}

const reducer = (oldState=initialState, action) => {
  console.log("Old State:", oldState, "Action:", action)
  switch(action.type){
    case "PLUS":
      return {...oldState, count: oldState.count + action.payload}
    case "MINUS":
      return {...oldState, count: oldState.count - action.payload}
    default:
      return oldState
  }
}

export default reducer
