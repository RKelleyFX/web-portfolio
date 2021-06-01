// Necessary Imports
import React from 'react';
import * as serviceWorker from './serviceWorker';

// Redux Store Imports
import { createStore } from 'redux';
import reducerNav from './reducers/navigation';
import { Provider } from 'react-redux';

// Routing Imports
import { render } from 'react-dom';

// Component Imports
import App from './App';

// Styling Imports
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// AWS Imports
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

/************************REDUX STORE*********************** */
const store = createStore(
    reducerNav,
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
