import { useEffect, useRef, useState } from "react"


export const TimeoutManager = () => {
    const [message, setMessage] = useState<string>("¡Haz clic para retrasar el mensaje!");
    const timeoutRef = useRef< number| null>(null);
    const startTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            console.log("Timeout anterior cancelado.");
        }

        setMessage("Mensaje retrasado por 3 segundos...");
        const id = setTimeout(() => {
            setMessage("¡El mensaje ha aparecido!");
            timeoutRef.current = null;
        }, 3000);
        timeoutRef.current = id;
    }
    useEffect(() => {
    return () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
    };
}, []);
    return ( 
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Timeout Manager</h1>
            <h2 className="text-xl font-bold text-white"> {message} </h2>
            <h3 className="text-xl font-thin text-white">
                timeoutRef: {timeoutRef.current} s
            </h3>
            <button onClick={startTimeout} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Retrasar Mensaje (3s)
            </button>
            <p className="text-s font-thin text-white">*Intenta hacer doble clic rápidamente para ver cómo se cancela el anterior.</p>
        </div>
    )
}