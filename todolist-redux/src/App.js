import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {connect} from 'react-redux';
import {getTodos} from './actions';
import {Route} from 'react-router-dom';

import mytodos from './containers/mytodos'
import Lists from './components/lists';

class App extends Component {

componentDidMount(){
  this.props.getTodos();
}

  render(){
    return (
      <div className="App">
       <Header/>
   <Route path="(/|/todos)" component={mytodos}></Route>
   <Route path="/lists" exact component={Lists}></Route>
    </div>
    );
  }
}

export default connect(null, {getTodos})(App);
