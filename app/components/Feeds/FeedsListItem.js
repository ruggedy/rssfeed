import React from 'react';
import Dompurify from 'dompurify';

export default (props) => {
	const { item } = props;
	
	const cleanDescription = item.description && Dompurify.sanitize(item.description);
	const cleanContent = item.content && Dompurify.sanitize(item.content)
    return(
        <li className="feeds-item">
            <div className="header">
                <h3>{item.title}</h3>
                <span>{item.pubDate}</span>
            </div>
			<div className="body">
				<div dangerouslySetInnerHTML={{__html: cleanDescription}} />
				<div dangerouslySetInnerHTML={{__html: cleanContent}} />
			</div>
        </li>
    )
} 