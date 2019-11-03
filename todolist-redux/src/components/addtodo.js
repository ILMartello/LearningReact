import React,{Fragment} from 'react'
export default function addTodo(){
    let todoInput;
    
    //Trasformare il riferimento con una arrow (ante React.ref)
    //il node è App in questo caso, dipende dove si trova il componente
    
    return( 
        <Fragment>
            <input ref ={ (node) =>{todoInput = node}}/>
            <button onClick = { addTodo }>Add</button>
            </Fragment>
)
}