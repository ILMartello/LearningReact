import React from 'react'

export default function addTodoComponent({addnew}){
    let todoInput;
 
    return( 
        <div className="addTodo">
            <input defaultValue='' ref ={ (node) =>{todoInput = node}}/>
            <button onClick = {
                ()=>{
                  addnew(todoInput.value);
                    todoInput.value='';
                    }
                    }
                    >Add</button>
            </div>
)
}
