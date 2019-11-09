import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {applyMiddleware, createStore } from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';

// il mio storeTodos con la lista di default
let storeTodos = {

    activeFilter:'ALL',
    todos:[

    { 
      id:0, 
      todo: 'Fare la spesa',
      completed: false
      },
      {
        id:1,
        todo: 'Fare i compiti', 
        completed: true
        },
    {
      id:2, 
      todo: 'chiamare la mamma', 
      completed: false
    }

  ]
};
  
//Se nello storage è salvato lo stato, lo sovrascrivo a storetodos
  if (localStorage.getItem('mytodolist')){
    const currState = JSON.parse(localStorage.getItem('mytodolist'));
    if(currState){ storeTodos = currState  }
  }
//da ApplyMiddleware ricevo direttamente state e dispatch e ritorno questa struttura in funzione di applyMiddleware
function logger({getState, dispatch}) {
  console.log('MIDDLEWARE CHIAMATO ');
   return function (next) {
     console.log('PRIMA DELLA CHIAMATA ', getState());
    return function (action) {
      console.log('AZIONE ', action);
      console.log('PRIMA DELL\'AZIONE ', getState());
        let result =  next(action);
        console.log('DOPO L\' AZIONE ', getState());
        console.log('RESULT ', result);
        return result;
    }
  }
}



   const store = createStore(storeReducer, { ...storeTodos },applyMiddleware(logger));

   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 store.subscribe(
   ()=>{
    //Trasformo l'oggetto in una string con json.stringify
  const currState = JSON.stringify(store.getState());
  //Ogni volta che cambia lo stato salvo lo stato nel Localstorage
  localStorage.setItem('mytodolist',currState);
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