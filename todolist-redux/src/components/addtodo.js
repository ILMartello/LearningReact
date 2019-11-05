import React,{Fragment} from 'react'
import {addTodo} from '../actions/index'
import addnew from '../containers/addnew';

export default function addTodoComponent({addnew}){
    let todoInput;
 
    return( 
        <Fragment>
            <input defaultValue='' ref ={ (node) =>{todoInput = node}}/>
            <button onClick = {
                ()=>{
                  addnew(todoInput.value);
                    todoInput.value='';
                    }
                    }
                    >Add</button>
            </Fragment>
)
}
