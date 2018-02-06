import { REHYDRATE } from 'redux-persist/es/constants'
import { NULL, SELECTED_FEED, REMOVE_FEED } from "../actions/constants";

import { map } from 'rxjs/operators/map';


// Select a feed if one already exists but none ius selected

export default ($actions, store) => 
    $actions.ofType(REHYDRATE,REMOVE_FEED).pipe(
        map(action => {
			const { selectedFeed, feeds } = store.getState().RssFeed;
			const feedUrls = Object.keys(feeds);
			if(feedUrls.length > 0 && (!selectedFeed || !feeds[selectedFeed])){
				return { type: SELECTED_FEED, payload: feedUrls[0]}
			}
			return {type: NULL}
		}),
        
    )