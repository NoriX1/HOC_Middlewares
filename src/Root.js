import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async'
import reducers from './reducers';

export default ({ children, initialStore = {} }) => {
    const store = createStore(
        reducers,
        initialStore,
        applyMiddleware(async)
    );
    return <Provider store={store}>{children}</Provider>
}