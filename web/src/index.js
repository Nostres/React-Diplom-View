import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from 'App';

import { todoApp } from 'reducer';
import { createStore } from 'redux';


const store = createStore(todoApp);

export default class Index extends Component {
    render () {
        return <div><App/></div>;
    }
}

ReactDOM.render(
    <Provider store={store} key="provider">
        <Index/>
    </Provider>,
    document.getElementById('app'));