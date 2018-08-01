// A store is a big object{} which holds the state of our application. 
// The store brings our actions and reducers together.
/* It :
    - Holds application state;
    - Allows access to state via getState();
    - Allows state to be updated via dispatch(action);
    - Registers listeners via subscribe(listener);
    - Handles unregistering of listeners via the function returned by 
    subscribe(listener).
*/

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'; // install middleware to deal with asynchronous actions
import rootReducer from './reducers/index';

const Store = createStore(
    rootReducer,
    applyMiddleware(promise),
);

export default Store;