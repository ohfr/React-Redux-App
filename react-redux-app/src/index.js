import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { reducer as weatherReducer } from './reducers/weather';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(weatherReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <App />
 </Provider>, document.getElementById('root'));

