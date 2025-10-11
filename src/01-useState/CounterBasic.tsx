import { useState } from "react";


export const CounterBasic = () => {
    const [value, setValue] = useState(0);
    const handleClickDecrement = () => {
        setValue((prev) => {
            return prev - 1
        })
    }
    const handleClickIncrement = () => {
        setValue((prev) => {
            return prev + 1
        })
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
    );
}