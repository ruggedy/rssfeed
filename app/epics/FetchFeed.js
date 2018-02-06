import { 
	FETCH_FEED_INIT, 
	FETCH_FEED_FAILURE, 
	FETCH_FEED_SUCCESS,
	ERROR_INIT
 } from '../actions/constants';

import { fromPromise } from 'rxjs/observable/fromPromise';
import { empty } from 'rxjs/observable/empty';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

import { switchMap } from 'rxjs/operators/switchMap';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

import RssFetch from '../services/rssFetch';

// this epic controls the fetching of rss feeds on url input enter.

export default ($actions, store) => 
    $actions.ofType(FETCH_FEED_INIT).pipe(
        map(action => action.payload),
        switchMap(url => {
			const { feeds } = store.getState().RssFeed;
			console.log(feeds[url]);
			if(feeds[url]){
				const error = new Error("Feed already exists");
				return of({type: ERROR_INIT, error})
			} 
			return fromPromise(RssFetch(url)).pipe(
				mergeMap(res => {
					
					if(res.status === 'error'){
						return _throw(res);
					}

					const { feed, items } = res;
					return of({type: FETCH_FEED_SUCCESS, payload: {feed, items}})
				}),
				catchError( error => {
					return of({type: FETCH_FEED_FAILURE, error})
				})
			);
		}),
    );