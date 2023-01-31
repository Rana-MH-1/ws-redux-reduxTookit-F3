import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment } from './Redux2/CountSlice'

const App2 = () => {
  const count = useSelector(state=> state.CountReducer.count)
  const dispatch = useDispatch()
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=> dispatch(Increment()) }>Increment</button>
    </div>
  )
}

export default App2