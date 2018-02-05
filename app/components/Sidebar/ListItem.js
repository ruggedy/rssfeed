import React from 'react';

export default (props) => {
    const {url, title, description, image} = props.item
    
    return (
        <li className="sidebar-list" onClick={props.onClick}>{title}</li>
    )
}