import { useEffect, useState } from "react"



export const CleanningOfEffect = () => {
    const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);
    const updateWidth = () => {
        setSizeWindow(window.innerWidth)
    };
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        console.log("Suscripcion de 'resize' agregada");

        return () => {
            window.removeEventListener('resize', updateWidth);
            console.log("Suscripcion de 'resize' eliminada (limpieza)");
        }
    }, [])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Limpieza de Efecto (Suscripción/Desuscripción)</h1>
            <p>
                Intente redimensionar la ventana del navegador.
            </p>
            <p>Ancho actual: <strong>{sizeWindow}px</strong></p>
        </div>
    )
}