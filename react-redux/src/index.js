require('./assets/stylesheets/styles.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // glue for react-redux, takes in Store as prop
import App from './app/App.js'
import Store from './Store';

ReactDOM.render(
    <Provider store={Store}>  
        <App />
    </Provider>,
document.getElementById('root')
); // render App to root