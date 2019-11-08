import React from 'react';
import Todo from './todo';

export default function TodoList({todos, removeTodo, toggleTodo}){
    
return(
<ul>
{
 todos.map( (todo) => <Todo id ={todo.id} key={todo.id} onClick = {toggleTodo} todoItem = {todo}/>)
} 
</ul>
);
}
