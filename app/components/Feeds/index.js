import React, { PureComponent } from 'react';
import FeedListItem from './FeedsListItem';

import './index.scss';

export default class Feeds extends PureComponent {

    constructor(props){
        super(props)
    }

    static defaultProps = {
        items: []
    }

    renderItems = item => <FeedListItem item={item} key={item.guid} />

    render(){
        return (
            <ul className="feeds-container">
                {this.props.items.map(this.renderItems)}
            </ul>
        )
    }
}