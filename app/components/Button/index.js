import React from 'react';

import './index.scss';

export default (props) => {
    return (
        <button className="ripple-button" {...props}>
            <i className="fas fa-search-plus fa-2x" />
        </button>
    )
}