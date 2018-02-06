import React from 'react';

export default (props) => {
    const {url, title, description, image, } = props.item;
	
    return (
		<li className={`sidebar-list ${props.selected? "selected": ""}`} onClick={props.onClick}>
			{title}
			<span onClick={props.onRemove}><i className="fas fa-times fa-2x"  /></span> 
		</li>
    )
}