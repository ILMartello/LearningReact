import React from 'react';
const filterlink = ({onClickFilter, actionType, children})=>{
return(

    <a href="#"
    onClick={(e)=>{
        e.preventDefault();
        onClickFilter(actionType)
    }}>{children}</a>
)
};

export default filterlink;