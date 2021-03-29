import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./store/rootReducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./store/sagas";

const saga = createSagaMiddleware();

// @ts-ignore
const store = createStore(rootReducer, compose(
    //@ts-ignore
    applyMiddleware(thunk, saga)
    //@ts-ignore
));

saga.run(sagaWatcher);

// @ts-ignore
ReactDOM.render(
    //@ts-ignore
    <Provider store={store}>
        <BrowserRouter> <App/></BrowserRouter>

    </Provider>,
    document.getElementById('app')
);

// </StoreContext.Provider>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

