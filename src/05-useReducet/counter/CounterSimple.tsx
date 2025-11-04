import { useReducer } from "react"
import { counterReducer, getInitialState } from "./counterReducer"



export const CounterSimple = () => {
    const [state, dispatch] = useReducer(counterReducer, getInitialState());
    const {value} = state;
const handleClickDecrement = () => {
    dispatch({type: "DECREMENTAR"})
}
const handleClickIncrement =() => {
    dispatch({type: "INCREMENTAR"})
}
  return (
    <div className="bg-gradient flex flex-col gap-4">
          <h1 className="text-2xl font-thin text-white">Counter Basic</h1>
          <h3 className="text-xl">Current Value: {value}</h3>
          <button
          onClick={handleClickDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Decrement</button>
          <button 
          onClick={handleClickIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">Increment</button>
        </div>
  )
}
