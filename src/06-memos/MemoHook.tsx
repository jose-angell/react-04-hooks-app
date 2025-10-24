import { useState } from "react"
import { MySubTitle } from "./ui/MySubTitle";
import { MyTitle } from "./ui/Mytitle";



export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp </h1>
        <MyTitle title={title}/>
        <MySubTitle subTitle={subTitle}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello' + new Date().getTime())}
        >
            Cambiar titulo
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle('World' + new Date().getTime())}
        >
            Cambiar subtitulo
        </button>
    </div>
  )
}
