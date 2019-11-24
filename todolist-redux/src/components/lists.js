import React from 'react';
import List from './list';
import AddnewList from '../containers/addnewlist';

export default function lists({lists,addList, removeList}){
    return(
        <div className="container">
        <h1>Lists</h1>
        <AddnewList/>
        <ul className="lists">
        {lists.map(list => <List key={list.id} list={list} removeList= {removeList}/> )}    
        </ul>        
        </div>
    )
}