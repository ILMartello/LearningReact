import {TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './../actions/actiontypes';

export default function todosReducer(state = [], action) {
    switch(action.type)
    {
      case `${ADD_TODO}_FULFILLED`:
      return [ 
           action.payload.data,
          ...state 
        ];
      case `${REMOVE_TODO}_FULFILLED`:
          return state.filter(ele => ele.id !== action.payload.config.id);

          case `${TOGGLE_TODO}_FULFILLED`:
           return state.map((todo)=>{
              if(todo.id !== action.payload.data.id){ 
                return todo
              }
              return action.payload.data
           });

            case `${TODOS}_FULFILLED`:
              const list = +action.payload.config.list;
          
              if(!list){
                //OCCHIO AL JAVASCRIPT! Se x=0 allora !x=true.
               return  action.payload.data;
              }
              else
              {
                return action.payload.data.filter(todo => +todo.list ===list);
              }            

      default: return state; 
    }

  }