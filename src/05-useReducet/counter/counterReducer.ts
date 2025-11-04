

export interface CounterState {
    value: number;
}

export const getInitialState = (): CounterState => {
    return {
        value: 0,
    }
}

export type CounterActions = 
{type: "INCREMENTAR"} |
{type: "DECREMENTAR"}

export const counterReducer = (state: CounterState, action: CounterActions): CounterState => {

    switch(action.type){

        case "INCREMENTAR": 
            return {
                ...state,
                value : state.value + 1
            }
            case "DECREMENTAR": 
            return {
                ...state,
                value : state.value - 1
            }
        default :
            return state
    }
}