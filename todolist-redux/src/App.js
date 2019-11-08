import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import MyTodoList from './containers/mytodolist'
import AddNewTodo from './containers/addnew'
import Footerlink from './components/filterlink'


class App extends Component {

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="container"> 
     <AddNewTodo/>
        <MyTodoList/>
        <div classNmae="footer">
          <Footerlink actionType="ALL">ALL</Footerlink>
          {'    '}
          <Footerlink actionType="TODO">TO DO</Footerlink>
          {'    '}
          <Footerlink actionType="COMPLETED">COMPLETED</Footerlink>
        </div>
        </div>
    </div>
    );
  }
}

export default App;
