import React from 'react';

export default (props) => {
    const { item } = props;
    return(
        <li className="feeds-item">
            <div className="header">
                <h3>{item.title}</h3>
                <span>{item.pubDate}</span>
            </div>
            <div className="description"></div>
            
        </li>
    )
} 