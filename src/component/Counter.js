import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../app/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>counter component</h2>
      <button onClick={(e)=>{ dispatch(increment())}}>increment</button>
<span>{ count }</span>
      <button onClick={(e)=>{ dispatch(decrement())}}>decrement</button>
    </div>
  )
}

export default Counter;
