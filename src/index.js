import React from 'react';
import {browserHistory} from 'react-router'
import ReactDOM from 'react-dom';
import Root from './Components/Root';
import './index.css';
import createStore from './store';
var store = createStore();

ReactDOM.render(
    <Root history={browserHistory} store={store}/>,
    document.getElementById('root')
);



