import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <h2>Display component</h2>
      value is { count }
    </div>
  )
}

export default Display;
