import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import AddTodo from './components/addtodo';
import MyTodoList from './containers/mytodolist'
import AddNewTodo from './containers/addnew'



class App extends Component {
  constructor(){
      super();
    
    }

  render(){
    return (
      <div className="App">
        <Header/>
     <AddNewTodo/>
        <MyTodoList/>
    </div>
    );
  }
}

export default App;
