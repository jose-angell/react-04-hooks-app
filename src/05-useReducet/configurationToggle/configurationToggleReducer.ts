

export interface ConfigurationToggleState {
    config: boolean
}

export const getInitialState = (): ConfigurationToggleState => {
    return {
        config: false
    }
}

type ConfigurationToggleActions = 
| {type: "ACTIVE"}
| {type: "DESACTIVE"}
| {type: "TOGGLE"}


export const  ConfigurationToggleReducer = (state: ConfigurationToggleState, actions: ConfigurationToggleActions ): ConfigurationToggleState => {
    switch(actions.type){
        case "ACTIVE": 
            return {
                ...state,
                config: true
            }
        case "DESACTIVE": 
            return {
                ...state,
                config: false
            }
        case "TOGGLE": 
            return {
                ...state,
                config: !state.config
            }
        default:
            return state
    }
}