import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchDeviceData } from './actions/index';
import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchDeviceData());

ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));