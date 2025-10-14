import { useEffect, useRef, useState } from "react"


export const RenderCount = () => {
    const [randomValue, setRandomValue] = useState<number>(0);
    const renderCount = useRef<number>(0);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(`Renderizado numer: ${renderCount}`)
    })
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Render Count</h1>
            <h2 className="text-xl font-thin text-white">cunter: {renderCount.current}</h2>
            <button
             className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setRandomValue(Math.random())}>
                Cambiar Estado 
            </button>
            <p>Valor de estado: {randomValue}</p>
    </div>
    )
}