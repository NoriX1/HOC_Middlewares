import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <Root>
            <Route path="/" component={App} />
        </Root>
    </BrowserRouter>,
    document.querySelector('#root'));
