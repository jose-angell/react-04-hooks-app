import { useState } from "react";


export const ToggleMessage = () => {
    const [ isVisible, setIsVisible] = useState(true);
    const handleMessageToggle = () => {
        setIsVisible(prevVisible => !prevVisible)
    }
    return (
        <div className="bg-gradient flex flex-col gap-4">
          {isVisible  &&  (<h1 className="text-2xl font-thin text-white">Este mensaje se oculta con el boton</h1> )}
          <button
          onClick={handleMessageToggle}
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Toggle message</button>
          <button />
        </div>
    );
}