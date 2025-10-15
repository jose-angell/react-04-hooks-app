import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-useReducet/TasksApp'
// import { Cronometro } from './03-examples/Cronometro'
// import { TimeoutManager } from './04-useRef/TimeoutManager'
// import { RenderCount } from './04-useRef/RenderCount'
// import { CleanningOfEffect } from './02-useEffect/CleanningOfEffect'
// import { ChangeTitleWithCounter } from './02-useEffect/ChangeTitleWithCounter'
// import { UserDataOnesTimes } from './02-useEffect/UserDataOnesTimes'
// import { FormUser } from './01-useState/FormUser'
// import { ToggleMessage } from './01-useState/ToggleMessage'
// import { CounterBasic } from './01-useState/CounterBasic'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    {/* <CounterBasic /> */}
    {/* <ToggleMessage /> */}
    {/* <FormUser /> */}
    {/* <UserDataOnesTimes /> */}
    {/* <ChangeTitleWithCounter/> */}
    {/* <CleanningOfEffect/> */}
    {/* <RenderCount /> */}
    {/* <TimeoutManager/> */}
    {/* <Cronometro/> */}
    <TasksApp/>
  </StrictMode>,
)
