import React from 'react';
import Footerlink from './filterlink';
import PropTypes from 'prop-types';
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
todoFooter.propTypes={
  activeFilter: PropTypes.string,
  filterTodo: PropTypes.func.isRequired
}