import React from 'react';

import './index.scss';
// just trying to follow good practices as you might want to have 
// different designs/ beahavior for different components 
//  so abstracting them to common functional components blah

export default (props) => {
    
    return (
        <input className="sidebar-input" type="text" {...props}/>
    )
}
