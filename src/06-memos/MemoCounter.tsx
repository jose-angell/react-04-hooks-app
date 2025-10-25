import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heayStuff = (interationNumber: number) => {
    console.log('heavy_stuuff_started')
    for (let i = 0; i < interationNumber; i++) {
        console.log('Ahi vamos...');
    }
    console.log('heavy_stuuff_started')
    return `${interationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {
 const {counter, increment} = useCounter(40_000);
 const {counter:counter2, increment: increment2} = useCounter(10_000);
 const myHeavyVAlue = useMemo(() => heayStuff(counter), [counter]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl fount-bold">Memo - useMemo</h1>
        <hr/>
        <h4>Counter: {counter}</h4>
        <h4>Counter 2: {counter2}</h4>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment}
        >+1</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment2}
        >+1 - Counter2</button>
    </div>
  )
}
