import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';

let todos = [
  'Fare la spesa',
  'Fare i compiti',
  'Chiamare la mamma'
]

function storeReducer(state = {}, action) { //QUESTO é IL REDUCER
  switch(action.type) //In base al type della action ritorno un pezzo di stato
  {
    case 'ADD_TODO':
    return{
      todos:[ //i todos dello stato ora saranno..
        action.todo, //uso le proprietà della action per aggiungere in cima il nuovo todo
        ...state.todos //più tutti i todos dello stato (precedente)
      ]
    }
    case 'REMOVE_TODO': //Utilizzo .slice()
        return {
          todos:[
            ...state.todos.slice(0, action.id),
            ...state.todos.slice(action.id+1)
          ]
        }
    default: return {...state}; //Il default è se non conosco il type
  }

}

const store =  createStore(storeReducer, {todos: [...todos]}); //QUA CREO LO STORE GLOBALMENTE (fuori da App)

class App extends Component {
  constructor(){
      super();
      this.state= { 
        todos: [
        ]
      };
      this.todoInput = React.createRef('input');
    }
  
    componentDidMount(){
      //Quando il componente viene montato mi "abbono" al reducer trabite il subscribe:
      //Quello che c'è dentro il subscribe verrà chiamato ogni volta che si aggiornerà la store
      this.setState({todos: [...store.getState().todos]});
    store.subscribe(()=> {
      console.log(store.getState());
      this.setState({todos: [...store.getState().todos]});
    })
  }

  addTodo = () =>{
    const todo = this.todoInput.current.value;
    store.dispatch({
     type:'ADD_TODO',
     todo //todo:todo
    })
  }
  removeTodo = (i) =>{
    store.dispatch({
     type:'REMOVE_TODO',
     id: i
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>
          TODO LIST
          </h1>
        </header>
        <input ref= {this.todoInput} />
        <button onClick = { this.addTodo }>Add</button>
        <ul>
          {
            this.state.todos.map((todo, i)=><li key={i}>{todo} <button onClick={ ()=> { this.removeTodo(i) } }>-</button></li>)
            //this.state.todos.map((todo, i)=><li key={i}>{todo} <button onClick={ this.removeTodo.bind(null,i) }>-</button></li>)
            //2 metodi per non far chiamare la funzione nel map con (i) in loop dall'inizio
            //MyFunction.bind ritorna una funzione con lo stesso corpo di MyFunction ma con un contesto (this) diverso.
          }
        </ul>
    </div>
    );
  }
}

export default App;
