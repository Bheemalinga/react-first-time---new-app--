import React from 'react'

const Child = ({count,onIncrement}) => {
  return (
    <div>
        <h2>Child Component</h2>
        <p>{count}</p>
        <button onClick = {onIncrement}>Increment</button>
    </div>
  )
}

export default Child