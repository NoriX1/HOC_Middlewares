import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

export default ({ children, initialStore = {} }) => {
    const store = createStore(
        reducers,
        initialStore,
        applyMiddleware(reduxPromise)
    );
    return <Provider store={store}>{children}</Provider>
}