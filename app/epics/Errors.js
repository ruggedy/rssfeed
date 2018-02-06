
import { ERROR_INIT, ERROR_COMPLETE } from "../actions/constants";

import { timer } from 'rxjs/observable/timer';

import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';


// Select a feed if one already exists but none ius selected

const CLOSE_DELAY = 5000; // Value in ms
export default $actions => 
    $actions.ofType(ERROR_INIT).pipe(
        switchMap(action => timer(CLOSE_DELAY).pipe(
			map(value => ({type: ERROR_COMPLETE}))
		)),  
    );