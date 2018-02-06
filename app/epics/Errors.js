
import { ERROR_INIT, ERROR_COMPLETE } from "../actions/constants";

import { timer } from 'rxjs/observable/timer';

import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';


// This epic controls how long the error message lasts for on screen.

const CLOSE_DELAY = 5000; // Value in ms
export default $actions => 
    $actions.ofType(ERROR_INIT).pipe(
        switchMap(action => timer(CLOSE_DELAY).pipe(
			map(value => ({type: ERROR_COMPLETE}))
		)),  
    );