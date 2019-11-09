import React from 'react';
import Footerlink from './filterlink';
export default function todoFooter ({filterTodo}){
    return(
        <div className="footer">
        <Footerlink onClickFilter={filterTodo} actionType="ALL">ALL</Footerlink>
        {'    '}
        <Footerlink onClickFilter={filterTodo} actionType="TODO">TO DO</Footerlink>
        {'    '}
        <Footerlink onClickFilter={filterTodo} actionType="COMPLETED">COMPLETED</Footerlink>
      </div>
    );
}