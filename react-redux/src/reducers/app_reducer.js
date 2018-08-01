// Reducers have two arguments - the current state and the action
export default function(state={}, action) {
    switch(action.type) {
        case 'FETCH_DATA':
            // never reassign new state - always mutate the state
            const newState = Object.assign({}, ...state, action.payload.data);
            return newState;
        default:
            return state; // Reducers always return next state or default state
    }
}