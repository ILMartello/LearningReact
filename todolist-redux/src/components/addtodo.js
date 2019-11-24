import React from 'react'
import PropTypes from 'prop-types';

export default function addTodoComponent({addTodo, list}){
    let todoInput;
 
    return( 
        <div className="addTodo">
            <input
            onKeyUp = {
              (evt)=>{
                if(+evt.keyCode===13){
                  addTodo(todoInput.value, list);
                  todoInput.value='';
                }
              }
            } 
            defaultValue='' ref ={ (node) =>{todoInput = node}}/>
            <button onClick = {
                ()=>{
                  addTodo(todoInput.value, list);
                    todoInput.value='';
                    }
                    }
                    >Add</button>
            </div>
)
}