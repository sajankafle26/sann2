import React, { useContext } from 'react'
import { abc } from './A'
 
function C() {
    var value=useContext(abc)
  return (
    <div>
      <h1>C {value}</h1>
    </div>
  )
}

export default C
