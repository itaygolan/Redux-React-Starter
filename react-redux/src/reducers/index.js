// REDUCERS !!!

/*
Reducers handle the logic that will happen to the state. 
Let’s say a user clicks a button, what happens next are the following steps:

1. An action type called "BUTTON_CLICKED" launches off an action with the payload. 
   The action returns a plain object.

2. All reducers will be invoked. The reducer with the type "BUTTON_CLICKED" 
   will be further invoked to return the new state. 
   The payload is passed by the action . All reducers by default return the state.

3. The store listens for any changes in the reducers and holds the new state.

4. The store passes the new state to our React views.

5. React updates the view.

*/


import { combineReducers } from 'redux';
import AppReducer from './app_reducer';


// Need to combine reducers because store only takes in one reducer
const rootReducer = combineReducers({
    astronomy: AppReducer
});

export default rootReducer;