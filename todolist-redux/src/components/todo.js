import React from 'react';
//import { removeTodo } from '../actions';
export default function todo({todoItem, toggleTodo, id, removeTodo}){
    
return(
<li className={todoItem.completed? 'completed':''}
onClick={()=> toggleTodo(id, !todoItem.completed)}>
<span className={todoItem.completed? 'completed':'uncomplete'}></span>
{todoItem.todo} 
<span className="cross" onClick={(e) =>
    {
        e.stopPropagation();
        removeTodo(id)   
    }}></span>
</li>
    ) ;
}