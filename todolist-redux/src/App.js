import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {connect} from 'react-redux';
import {getTodos} from './actions';
import {getLists} from './actions/lists';
import {Route, Switch} from 'react-router-dom';

import mytodos from './containers/mytodos'
import myLists from './containers/mylists';

class App extends Component {

componentDidMount(){
  //this.props.getTodos();
  this.props.getLists();
}

  render(){
    return (
      <div className="App">
       <Header/>
       <Switch>
   <Route path="(/|/todos)" component={mytodos}></Route>
   <Route path="/lists/:list([0-9]+)/todos" component={mytodos}></Route>
   <Route path="/lists" component={myLists}></Route>

   <Route path="/signup" render={()=> <div>SIGNUP</div>} ></Route>
   <Route path="/login" render={()=> <div>LOGIN</div>} ></Route>
    </Switch>
    </div>
    );
  }
}

export default connect(null, {getTodos, getLists})(App);
