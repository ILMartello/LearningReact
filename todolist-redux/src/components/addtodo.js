import React from 'react'
import PropTypes from 'prop-types';

export default function addTodoComponent({addTodo}){
    let todoInput;
 
    return( 
        <div className="addTodo">
            <input
            onKeyUp = {
              (evt)=>{
                if(+evt.keyCode===13){
                  addTodo(todoInput.value);
                  todoInput.value='';
                }
              }
            } 
            defaultValue='' ref ={ (node) =>{todoInput = node}}/>
            <button onClick = {
                ()=>{
                  addTodo(todoInput.value);
                    todoInput.value='';
                    }
                    }
                    >Add</button>
            </div>
)
}
addTodoComponent.propType={
  addTodo: PropTypes.func.isRequired,
}
