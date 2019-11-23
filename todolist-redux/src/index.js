import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore, compose } from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


let storeTodos={}
  
//Se nello storage è salvato lo stato, lo sovrascrivo a storetodos
  if (localStorage.getItem('mytodolist')){
    const currState = JSON.parse(localStorage.getItem('mytodolist'));
    if(currState && !currState.hasError){ storeTodos = currState  }
  }


//Mi serve per gestire più middleware dentro il applyMiddleware:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   const store = createStore(storeReducer, { ...storeTodos },composeEnhancers( applyMiddleware(logger,promise))
   );

   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()




 store.subscribe(
   ()=>{
     const state = store.getState();
     if(!state.hasError){
    //Trasformo l'oggetto in una string con json.stringify
  const currState = JSON.stringify(state);
  //Ogni volta che cambia lo stato salvo lo stato nel Localstorage
  localStorage.setItem('mytodolist',currState);}
})

ReactDOM.render(
<Provider store ={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();