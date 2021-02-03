// Necessary Imports
import React from 'react';
import * as serviceWorker from './serviceWorker';

// Redux Store Imports
import { createStore } from 'redux';
import reducer from './reducers/navigation';
import { Provider } from 'react-redux';

// Routing Imports
import { render } from 'react-dom';

// Component Imports
import App from './App';

// Styling Imports
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/************************REDUX STORE*********************** */
const store = createStore(
    reducer,
    undefined
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

unsubscribe();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
