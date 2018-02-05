import { FETCH_FEED_INIT, FETCH_FEED_FAILURE, FETCH_FEED_SUCCESS } from '../actions/constants';

import { fromPromise } from 'rxjs/observable/fromPromise';
import { empty } from 'rxjs/observable/empty';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

import { switchMap } from 'rxjs/operators/switchMap';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

import RssFetch from '../services/rssFetch';


export default $actions => 
    $actions.ofType(FETCH_FEED_INIT).pipe(
        map(action => action.payload),
        switchMap(payload => fromPromise(RssFetch(payload)).pipe(
            mergeMap(res => {
                // console.log(res
                
                if(res.status === 'error'){
                    return _throw(res)
                }

                const { feed, items } = res
                return of({type: FETCH_FEED_SUCCESS, payload: {feed, items}})
            }),
            catchError( error => {
                console.log(error.message);
                return of({type: FETCH_FEED_FAILURE, error})
            })
        ))
    )