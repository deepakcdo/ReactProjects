import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import burgerBuilderReducers from "./store/reducers/burgerbuilder";
import orderReducers from "./store/reducers/order";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    burgerBuilder:burgerBuilderReducers,
    order:orderReducers
});

const store = createStore(rootReducers,composeEnhancers(
    applyMiddleware(thunk)));

const fullApp = (<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);
ReactDOM.render(fullApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
