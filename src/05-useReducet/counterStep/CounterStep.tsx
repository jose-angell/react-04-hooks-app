import { useReducer } from 'react';
import { counterStepReducer, getInitialState } from "./counterStepReducer"

export const CounterStep = () => {
const [state, dispatch] = useReducer(counterStepReducer, getInitialState()); 
const {count, step} = state;

const handleClickDecrement = () => {
  dispatch({type: 'DECREMENTAR'});
}
const handleClickIncrement = () => {
  dispatch({type: 'INCREMENTAR'});
}


  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Counter step</h1>
          <h3 className="text-xl">Current Value: {count}</h3>
          <button
          onClick={handleClickDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"> - {step}</button>
          <button 
          onClick={handleClickIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"> + {step}</button>

        <p className="font-medium mb-2">Cambiar Paso (Step):</p>
                <input
                    type="number"
                    value={step}
                    onChange={(e) => dispatch({type: 'CAMBIAR_STEP', payload: Number(e.target.value)})}
                    className="border p-2 w-20 text-center mr-3"
                    min="1"
                />
        <button
          onClick={() =>dispatch({type:'RESET'})}
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Reset</button>
    </div>
  )
}
