import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
// import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { CounterSimple } from './05-useReducet/counter/CounterSimple'
import { CounterStep } from './05-useReducet/counterStep/CounterStep'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get.user.action'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWords } from './05-useReducet/ScrambleWords'
// import { TasksApp } from './05-useReducet/TasksApp'
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
    <Toaster />
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
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagromApp/> */}
    {/* <Suspense fallback={
      <h1 className='bg-gradient flex flex-col'>
      <h1 className='text-2xl'>Cargando</h1>
    </h1>}>
      <ClientInformation getUser={getUserAction(101)}/>
    </Suspense> */}
    {/* <ProfessionalApp/> */}
    {/* <CounterSimple/> */}
    <CounterStep/>
  </StrictMode>,
)
