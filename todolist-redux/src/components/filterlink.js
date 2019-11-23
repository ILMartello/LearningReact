import React from 'react';
import PropTypes from 'prop-types';
const filterlink = (props)=>{
    
    let  {activeFilter,onClickFilter, actionType, children} = props;
    
    if(activeFilter=== actionType){
        return children;
    }
return(
    <a href="#"
    onClick={(e)=>{
        e.preventDefault();
        onClickFilter(actionType)
    }}>{children}</a>
)
};

export default filterlink;

filterlink.propTypes={
    props: PropTypes.shape({
        activeFilter: PropTypes.string.isRequired,
        onClickFilter:PropTypes.func.isRequired,
        actionType: PropTypes.string.isRequired,
        childer: PropTypes.element.isRequired
    })
}