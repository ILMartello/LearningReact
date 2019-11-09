import React from 'react';
import Footerlink from './filterlink';
export default function todoFooter ({activeFilter, filterTodo}){
    return(
        <div className="footer">
        <Footerlink activeFilter={activeFilter} onClickFilter={filterTodo} actionType="ALL">ALL</Footerlink>
        {'    '}
        <Footerlink activeFilter={activeFilter} onClickFilter={filterTodo} actionType="TODO">TO DO</Footerlink>
        {'    '}
        <Footerlink activeFilter={activeFilter} onClickFilter={filterTodo} actionType="COMPLETED">COMPLETED</Footerlink>
      </div>
    );
}