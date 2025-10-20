

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number; 
}

export type TaskAction = 
| {type: 'ADD_TODO', payload: string}
| {type: 'TOGGLE_TODO', payload: number}
| {type: 'DELETE_TODO', payload: number};

export const tasksReducer = (state:TaskState, action:TaskAction): TaskState => {
    switch(action.type){
        case 'ADD_TODO': {
            const newTodo: Todo = {
            id: Date.now(),
            text: action.payload.trim(),
            completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }
        case 'TOGGLE_TODO':{
            const updatedTodos = state.todos.map(todo => {
            if(todo.id == action.payload){
                return {...todo, completed: !todo.completed};
            }
            return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter((todo) => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };
        }
        case 'DELETE_TODO':
            {
                const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
                return {
                    ...state, 
                    todos: currentTodos,
                    length: currentTodos.length,
                    completed: currentTodos.filter((todo) => todo.completed).length,
                    pending: currentTodos.filter((todo) => !todo.completed).length,
                };
            }
        default:
            return state;
    }
    //return state; // siempre debe el mismo tipo de dato, si no nesecita retornar un estado nuevo, retorna el esetado actal
}