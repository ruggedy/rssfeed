import { 
    FETCH_FEED_FAILURE, 
    FETCH_FEED_INIT, 
    FETCH_FEED_SUCCESS,
	SELECTED_FEED,
	REMOVE_FEED
 } from './constants';
// fetch actions 

export const fetchFeedInit = (payload) => ({
    type: FETCH_FEED_INIT,
    payload
}) 

export const fetchFeedSuccess = (payload) => ({
    type: FETCH_FEED_SUCCESS,
    payload
})

export const fetchFeedFailure = (payload) => ({
    type: FETCH_FEED_FAILURE,
    payload
})

export const selectedFeed = (payload) => ({
    type: SELECTED_FEED,
    payload
})

export const removeFeed = (payload) => ({
	type: REMOVE_FEED,
	payload
})


