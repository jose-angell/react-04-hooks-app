import { useEffect, useRef, useState } from "react"


export const Cronometro = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);
    useEffect(() => {
        if(isRunning){
            const intervalId: number = window.setInterval(() => {
                setTime(prevSecons => prevSecons + 1);
                console.log("Cronómetro iniciado. ID:", intervalId);
            }, 1000)
            intervalRef.current = intervalId;
        }
        else{
            if(intervalRef.current !== null){
                window.clearInterval(intervalRef.current);
                console.log("Cronómetro pausado. ID limpiada:", intervalRef.current);
            }
            intervalRef.current = null;
        }
        return () => {
            if(intervalRef.current !== null){
                window.clearInterval(intervalRef.current);
            }
        }
    }, [isRunning])
    const handleStartPause = () => {
    setIsRunning(prev => !prev);
  };
    const handleReset = () => {
        if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
        }
        intervalRef.current = null;
        setIsRunning(false);
        setTime(0);
    }
    return (
        <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Cronometro</h1>
        <div style={{ fontSize: '3em', margin: '20px 0', fontWeight: 'bold' }}>
        {time}s
        </div>
        <button 
        onClick={handleStartPause}
         className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">
            {isRunning ? '⏸️ Pausa' : '▶️ Iniciar'}
        </button>
        <button 
        onClick={handleReset}
         className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">
            🔄 Reset
        </button>
         <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
        Estado: {isRunning ? 'CORRIENDO' : 'DETENIDO'}
      </p>
        </div>
    )
}