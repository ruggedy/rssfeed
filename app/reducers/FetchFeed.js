import { 
	FETCH_FEED_FAILURE,  
	FETCH_FEED_SUCCESS, 
	SELECTED_FEED, 
	REMOVE_FEED 
} from '../actions/constants';


const initialState = { 
    feeds: { },
    selectedFeed: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case FETCH_FEED_SUCCESS:
            const { feed, items } = action.payload;

            return {
                ...state, 
                feeds: {
                    ...state.feeds,
                    [feed.url]: {info: feed, items}
				},
				selectedFeed: feed.url
            }; 
        case SELECTED_FEED:
			return { ...state, selectedFeed: action.payload };
		case REMOVE_FEED:
			const url = action.payload;
			// remove object using destructuring assingment
			const { feeds } = state;
			const { [url]: removedValue, ...newFeeds } = feeds;
			console.log(url, newFeeds)
			return {
				...state,
				feeds: newFeeds
			};
        default:
            return state;
    }
}