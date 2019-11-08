import {connect} from 'react-redux';
import addTodoComponent from '../components/addtodo'
import {addTodo} from '../actions/index'

/*
//Versione LUNGA: mappo manualmente funzione / dispatch in mapDispatchToProps e poi assegno in connect
const mapDispatchToProps = (dispatch) => {
    return{
        addnew: (todo) =>{
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(addTodoComponent);
*/


export default connect(null, {addTodo})(addTodoComponent);
//La versione corta: come MapDispatchtoProps al posto di una funzione dove mappo manualmente...
//Connect avvolge addTodo in una dipatch. Quando in addTodoComponent passerò dei parametri a addnew...
//verranno passati automaticamente a addTodo.