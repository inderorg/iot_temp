import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchDeviceData } from './actions/index';
import './index.css';
import App from './App';

let initialState = [{id:1,name:'John Doe',grade:1,school:'React Redux School'},{id:2,name:'Jane Doe',grade:2,school:'React Redux School'}
,{id:3,name:'Terry Adams',grade:3,school:'React Redux School'},{id:4,name:'Jenny Smith',grade:4,school:'React Redux School'}];

if( localStorage.getItem("devices") === null)
localStorage.setItem('devices',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('devices'));

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchDeviceData());

ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));