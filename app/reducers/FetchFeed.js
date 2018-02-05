import { FETCH_FEED_FAILURE,  FETCH_FEED_SUCCESS, SELECTED_FEED } from '../actions/constants';


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
                }
            } 
        
        case SELECTED_FEED:
            if(action.payload){
                return { ...state, selectedFeed: action.payload }
            }
            return state
        default:
            return state;
    }
}