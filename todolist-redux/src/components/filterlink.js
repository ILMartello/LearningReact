import React from 'react';
const filterlink = ({actionType, children})=>{
return(

    <a href="#"
    onClik={(e)=>{
        e.preventDefault();
    }}>{children}</a>
)
};

export default filterlink;