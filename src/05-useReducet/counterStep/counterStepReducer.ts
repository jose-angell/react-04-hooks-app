
export interface CounterStepState {
    count: number;
    step: number;
}

export const getInitialState: CounterStepState ={
    count: 0,
    step: 1
}

export type CounterStepActions = 
{type: "INCREMENTAR"} |
{type: "DECREMENTAR"} |
{type: "CAMBIAR_STEP", payload: number} |
{type: "RESET" }

export const counterStepReducer = (state: CounterStepState, action:CounterStepActions): CounterStepState => {
    switch(action.type){
        case "INCREMENTAR": 
            return {
                ...state,
                count: state.count + state.step
            }
        case "DECREMENTAR":
            return {
                ...state,
                count: state.count + state.step
            }
        case "CAMBIAR_STEP":
            return {
                ...state,
                step: action.payload
            }
        case "RESET":
            return {
                ...state,
                count: 0,
                step: 1
            }
        default:
            return state
    }
}