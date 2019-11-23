import React from 'react';
import Todo from './todo';
import PropTypes from 'prop-types';

export default function TodoList(props){
    if(props.error.hasError){
       throw new Error(props.error.errorMessage)
    }
return(
<ul className="todos">
{
 props.todos.map( (todo) => <Todo todoItem = {todo} id ={todo.id} key={todo.id}
{...props}/>)
} 
</ul>
);
} 

TodoList.propTypes={
    props: PropTypes.shape({
        hasError: PropTypes.bool,
        errorMessage:PropTypes.string,
        todos:PropTypes.array
    })
}