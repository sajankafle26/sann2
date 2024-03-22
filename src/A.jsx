import React, { createContext } from 'react'
import B from './B'

export var abc=createContext()
function A() {
  return (
    <div>
        <abc.Provider value="sajan kafle sir">
      <h1>A</h1>
      <B/>
      </abc.Provider>
    </div>
  )
}

export default A
