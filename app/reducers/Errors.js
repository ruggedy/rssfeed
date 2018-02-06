import { 
	ERROR_COMPLETE,
	ERROR_INIT
} from '../actions/constants';


const initialState = null

export default (state=initialState, action) => {
    switch(action.type){
		case ERROR_INIT:
			return action.error;
		case ERROR_COMPLETE:
			return null;
        default:
            return state;
    }
}