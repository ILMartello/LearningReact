
export default function storeReducer(state = {}, action) {
    switch(action.type)
    {
      case 'ADD_TODO_FULFILLED':
      return{
        ...state,
        activeFilter:'TODO',
        todos:[ 
           action.payload.data,
          ...state.todos 
        ]
      }
      case 'REMOVE_TODO': 
          return {
            ...state,
            todos:[
              ...state.todos.slice(0, action.id),
              ...state.todos.slice(action.id+1)
            ]
          }

      case 'TOGGLE_TODO': 
           return {
             ...state,
            todos:[
              ...state.todos.map((todo)=>{
              if(todo.id !== action.id){
                return todo
              }
              return {
                ...todo,
                //Prendo con spread operator le proprietà dentro todo
                //sovrascrivo la proprietà completed con il suo contrario
                completed : !todo.completed
              }
              })
            ]
          }

      case 'SET_FILTER':
          return{
             ...state,
             activeFilter : action.activeFilter
            }

            case 'TODOS_FULFILLED':
              return{
                ...state,
                todos: action.payload.data
              }
          
      default: return {...state}; 
    }
  }