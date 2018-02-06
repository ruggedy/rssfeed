import { combineEpics } from 'redux-observable';

import FetchFeed from './FetchFeed';
import SelectedFeed from './SelectFeed';
import Errors from './Errors';

export default combineEpics(
	FetchFeed,
	SelectedFeed,
	Errors
);
