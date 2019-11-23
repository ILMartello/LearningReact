import {TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER} from './../actions/actiontypes';

export default function storeReducer(state = {}, action) {
    switch(action.type)
    {
      case `${ADD_TODO}_FULFILLED`:
      return{
        ...state,
        activeFilter:'TODO',
        todos:[ 
           action.payload.data,
          ...state.todos 
        ]
      }
      case `${REMOVE_TODO}_FULFILLED`:
          return {
            ...state,
            todos: state.todos.filter(ele => ele.id !== action.payload.config.id)
          }

          case `${TOGGLE_TODO}_FULFILLED`:
           return {
             ...state,
            todos:
              state.todos.map((todo)=>{
              if(todo.id !== action.payload.data.id){ 
                return todo
              }
              return action.payload.data
           })
            
          }

          case `${SET_FILTER}_FULFILLED`:
          return{
             ...state,
             activeFilter : action.payload.data.filter
            }

            case `${TODOS}_FULFILLED`:
              return{
                ...state,
                todos: action.payload.data
              }

      //REJECTED ACTIONS

      case 'TODOS_REJECTED':
      case 'ADD_TODO_REJECTED':
      case 'SET_FILTER_REJECTED':
      case 'TOGGLE_TODO_REJECTED':
      case 'REMOVE_TODO_REJECTED':
        return{
          ...state,
          hasError: true,
          errorMessage: action.payload.message
        }

      //END REJECTED

      
          
      default: return {...state}; 
    }

  }