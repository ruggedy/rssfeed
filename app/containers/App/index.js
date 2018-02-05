import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Sidebar from '../../components/Sidebar';
import Feeds from '../../components/Feeds';

import { fetchFeedInit, selectedFeed } from '../../actions';

import './index.scss';

class App extends Component {

    // console.log("props match", props.match)
    componentDidUpdate = () => {
        console.log(this.props.feeds)
    }

	render(){
        const { fetchFeedInit, feeds, feedItems, selectedFeed } = this.props;
        console.log(feedItems)

		return (
			<div className="app-container">
                <Sidebar 
                    feeds={feeds} 
                    onSearch={fetchFeedInit} 
                    onSelectedFeed={selectedFeed}/>
                <Feeds items={feedItems} />
			</div>
		);
	}
}


const mapStateToProps = ({RssFeed}) => ({
    feeds: Object.keys(RssFeed.feeds).map(key => RssFeed.feeds[key].info),
    feedItems: RssFeed.selectedFeed && RssFeed.feeds[RssFeed.selectedFeed].items || []
})

const mapDispatchToProps = dispatch => ({
    fetchFeedInit: payload => dispatch(fetchFeedInit(payload)),
    selectedFeed: payload => dispatch(selectedFeed(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);