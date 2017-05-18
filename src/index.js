import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import './views/index.css';
import store from './data/store';
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);