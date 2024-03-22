import React, { useReducer } from 'react'
function reducer(state, action){
    if(action.type=='inc')
  {
    return {
        count: state.count+1
    }
  }
  else if(action.type=='desc')
  {
    return {
        count: state.count-1
    }
  }
}
function Counter() {
    let [state, dispatch]=useReducer(reducer, {count: 21})
  return (
    <div>
      <h1>Counter By useReducer {state.count}</h1>
      <button onClick={()=>{dispatch({ type: 'inc' })}}>++</button>
      <button onClick={()=>{dispatch({ type: 'desc' })}}>--</button>
    </div>
  )
}

export default Counter
