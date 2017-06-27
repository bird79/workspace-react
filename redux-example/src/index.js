import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';


const store = createStore(reducers);

/*
import * as actions from './actions';

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200, 200, 200]));
unsubscribe();
store.dispatch(actions.setColor([201, 201, 201]));*/


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);