import { combineEpics } from 'redux-observable';

import FetchFeed from './FetchFeed';

export default combineEpics(
    FetchFeed
)
