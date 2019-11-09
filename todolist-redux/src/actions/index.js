import axios from 'axios';
import {APIURL} from '../config/config';

export const getTodos = () =>{
  return{
    type:'TODOS',
    payload: axios.get(APIURL)
  }
}

export const addTodo = (todo) =>{
  //ADD_TODO_FULFILLED
   return{
     type:'ADD_TODO',
     payload: axios.post(APIURL,{ todo:todo, completed:false})
    };
  };

export const removeTodo = (i) =>{
  return{
     type:'REMOVE_TODO',
     id: i
    };
  }

export const toggleTodo = (i) =>{
    return{
       type:'TOGGLE_TODO',
       id: i
      };
    }

export const filterTodo = (filter='ALL') =>{
      return{
         type:'SET_FILTER',
         activeFilter: filter
        };
      }