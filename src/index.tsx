import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./store/rootReducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

// @ts-ignore
const store = createStore(rootReducer, compose(
    //@ts-ignore
    applyMiddleware(thunk),
    //@ts-ignore
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// import reportWebVitals from './reportWebVitals';
// import {Store} from "./store/store";

// const store = new Store([]);
// @ts-ignore
// const StoreContext = createContext<Store>([]);
// export const useStore = (): Store => useContext(StoreContext);

// @ts-ignore
ReactDOM.render(
    //@ts-ignore
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

{/*<StoreContext.Provider value={store}>*/
}
{/*    <App/>*/
}
// </StoreContext.Provider>,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

