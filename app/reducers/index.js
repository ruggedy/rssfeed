import { combineReducers } from 'redux';
import RssFeed from './FetchFeed';
import Error from './Errors';

export default combineReducers({
	RssFeed,
	Error
})
