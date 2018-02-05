import React, { PureComponent } from 'react';
import Button from '../Button';
import Input from '../Input';
import ListItem from './ListItem';

import './index.scss';

const noop = () => {}
export default class Sidebar extends PureComponent {
    constructor(props){
        super(props)
        this._inputValue = "";
        
    }

    static defaultProps = {
        feeds: [],
        onSearch: noop,
        onSelectedFeed: noop
    }


    onInputChange = (event) => this._inputValue = event.target.value;
    
    onSearch = () => this.props.onSearch(this._inputValue)

    onSelectedFeed = url => event => this.props.onSelectedFeed(url)

    renderFeeds = (item) => <ListItem 
        key={item.url} 
        item={item} 
        onClick={this.onSelectedFeed(item.url)} />

    render(){
        return(
            <div className="sidebar-container">
                <div className="top">
                    <Input onChange={this.onInputChange} /> 
                    <Button onClick={this.onSearch}/>
                </div>
                <ul className="bottom">
                    {this.props.feeds.map(this.renderFeeds)}
                </ul>
            </div>
        )
    }
}