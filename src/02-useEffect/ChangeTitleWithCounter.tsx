import { useEffect, useState } from "react"



export const ChangeTitleWithCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    useEffect(() => {
        document.title = `Counter: ${counter} times`;
        console.log(`Efecto ejecutado. Nuevo conteo: ${counter}`);
        
    }, [counter])
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Change the Title with counter</h1>
            <h3>The Title of web site is update</h3>
            <p>Counter: <strong>{counter}</strong></p>
            <button 
            onClick={() => {setCounter(c => c + 1)}}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Increment counter
            </button>
        </div>
    )
}