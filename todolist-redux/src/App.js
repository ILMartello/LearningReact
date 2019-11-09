import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import MyTodoList from './containers/mytodolist';
import AddNewTodo from './containers/addnew';
import TodoFooter from './containers/todofootercontainer';


class App extends Component {

  render(){
    return (
      <div className="App">
       <Header/>
       <div className="container"> 
       <AddNewTodo/>
       <MyTodoList/>
       <TodoFooter/>
     </div>
    </div>
    );
  }
}

export default App;
