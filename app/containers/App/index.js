import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Sidebar from '../../components/Sidebar';
import Feeds from '../../components/Feeds';

import Errors from '../Errors';

import { fetchFeedInit, selectedFeed, removeFeed } from '../../actions';

import './index.scss';

class App extends Component {

    // console.log("props match", props.match)
    componentDidUpdate = () => {
        // console.log(this.props.feeds)
    }

	render(){
        const { 
			fetchFeedInit, 
			feeds, 
			feedItems, 
			selectedFeed,
			onRemoveFeed,
			onSelectedFeed
		 } = this.props;
        // console.log(feedItems)

		return (
			<div className="app-container">
				<Errors />
                <Sidebar 
                    feeds={feeds} 
					onSearch={fetchFeedInit}
					selectedFeed={selectedFeed} 
                    onSelectedFeed={onSelectedFeed}
					onRemoveFeed={onRemoveFeed}/>
                <Feeds items={feedItems} />
			</div>
		);
	}
}


const mapStateToProps = ({RssFeed}) => ({
    feeds: Object.keys(RssFeed.feeds).map(key => RssFeed.feeds[key].info),
	feedItems: RssFeed.selectedFeed && RssFeed.feeds[RssFeed.selectedFeed] && RssFeed.feeds[RssFeed.selectedFeed].items || [],
	selectedFeed: RssFeed.selectedFeed
})

const mapDispatchToProps = dispatch => ({
    fetchFeedInit: payload => dispatch(fetchFeedInit(payload)),
	onSelectedFeed: payload => dispatch(selectedFeed(payload)),
	onRemoveFeed: payload => dispatch(removeFeed(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);