import { useReducer } from "react"
import { ConfigurationToggleReducer, getInitialState } from "./configurationToggleReducer"

export const ConfigurationToggle = () => {
    const [state, dispatch] = useReducer(ConfigurationToggleReducer, getInitialState())
    const {config} = state;
  return (
    <div className="bg-gradient flex flex-col gap-4">
          <h1 className="text-2xl font-thin text-white">Toggle Basic</h1>
            <h3>Nivel 1: Toggle (Boolean)</h3>
            <p>Notificaciones: <strong>{config ? 'ACTIVADAS' : 'DESACTIVADAS'}</strong></p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
             onClick={() => dispatch({ type: 'TOGGLE' })}>
                Alternar Estado
            </button>
           <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => dispatch({ type: 'ACTIVE' })}>
                Activar Estado
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
             onClick={() => dispatch({ type: 'DESACTIVE' })}>
                Desactivar Estado
            </button>
        </div>
  )
}
