import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Decrement, Incremet, INC_with_value, Reset} from './Redux/actions'

function App() {
  const count = useSelector(state=> state.count )
  const dispatch = useDispatch()
  const [val, setVal] = useState('')

  return (
    <div className="App">
        <h3>{count}</h3>
        <button onClick={()=>dispatch(Incremet())}>INCRMENT</button>
        <button onClick={()=>{(count> 0) && dispatch(Decrement())}}>Decrement</button>
        <button onClick={()=> dispatch(Reset())}>Reset</button>
        <input onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=> dispatch(INC_with_value(+val))}>INCR with value</button>
    </div>
  );
}

export default App;
