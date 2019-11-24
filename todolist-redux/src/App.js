import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {connect} from 'react-redux';
import {getTodos} from './actions';
import {getLists} from './actions/lists';
import {Route} from 'react-router-dom';

import mytodos from './containers/mytodos'
import myLists from './containers/mylists';

class App extends Component {

componentDidMount(){
  this.props.getTodos();
  this.props.getLists();
}

  render(){
    return (
      <div className="App">
       <Header/>
   <Route path="(/|/todos)" component={mytodos}></Route>
   <Route path="/lists" exact component={myLists}></Route>
    </div>
    );
  }
}

export default connect(null, {getTodos, getLists})(App);
