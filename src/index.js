import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
);
