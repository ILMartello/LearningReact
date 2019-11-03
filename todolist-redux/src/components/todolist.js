import React from 'react';
import Todo from './todo';
export default function TodoList({todos}){
    
return(
<ul>
{
 todos.map( (todo,i) => <Todo key={i} todo={todo}></Todo>)
} 
</ul>);
}