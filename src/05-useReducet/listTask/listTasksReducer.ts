


export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

interface TodoState {
    todos: Todo[]
};

export const getTodoInicialState = (): TodoState => {
    return {
        todos: []
    }
}

export type TodoActions = 
{type: "AGREGAR_TAREA", payload: string} |
{type: "ELIMINAR_TAREA", payload: number} |
{type: "TOGGLE_TAREA", payload: number} |
{type: "LIMPIAR_COMPLETADAS"}


export const listTasksReducer = (state: TodoState, action: TodoActions): TodoState => {
    switch(action.type)
    {
        case "AGREGAR_TAREA": 
        {
            const newTodo : Todo = {
            id : Date.now(),
            text: action.payload.trim(),
            completed: false
            };
            return {
                ...state,
                todos: [... state.todos, newTodo]
            }
        }
        case "ELIMINAR_TAREA":{
            const updateTodoList = state.todos.filter(t => t.id != action.payload)
            return {
              ...state,
              todos: [...updateTodoList]
            }
        }
        case "TOGGLE_TAREA": {
            const updateTodo = state.todos.map((todo) => {
                if(todo.id == action.payload){
                    return {...todo, completed : !todo.completed}
                }
                return todo;
            })
            return{
                ...state,
                todos: updateTodo
            }
        }
        case "LIMPIAR_COMPLETADAS": {
            
            return {
                ...state,
                todos: state.todos.filter(task => !task.completed)
            }
        }
            
        default:
            return state;
    }
}