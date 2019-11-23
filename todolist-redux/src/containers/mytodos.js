import React from 'react'
import MyTodoList from './mytodolist';
import AddNewTodo from './addnew';
import TodoFooter from './todofootercontainer';
import Errorboundary from '../components/errorboundary';
export default  function mytodos()
{
return(
    <div className="container"> 
    <AddNewTodo/>
    <Errorboundary>
      <MyTodoList/>
    </Errorboundary>
    <TodoFooter/>
    </div>
    )    
}