import { useReducer, useState } from 'react'
import { getTodoInicialState, listTasksReducer, type Todo } from './listTasksReducer'

export const ListTasks = () => {
    const [state, dispatch] = useReducer(listTasksReducer, getTodoInicialState())
    const {todos} = state;
    const [newTodoText, setNewTodoText] = useState("")
    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoText.trim() === '') return;
        dispatch({type:"AGREGAR_TAREA", payload:newTodoText})
    }
  return (
    <div className="bg-gradient flex flex-col gap-4">
            <h2>Nivel 3: To-Do List con useReducer</h2>
            
            <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Nueva tarea..."
                    className="border p-2 w-100 text-center mr-3"
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Agregar
                </button>
            </form>
            
            <button
                onClick={() => dispatch({ type: "LIMPIAR_COMPLETADAS" })}
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
                Limpiar Completadas
            </button>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo: Todo) => (
                    <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                        
                        <span 
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                            onClick={() => dispatch({ type: "TOGGLE_TAREA", payload: todo.id })}
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch({ type: "ELIMINAR_TAREA", payload: todo.id })}
                            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
  )
}
