import {RECEIVE_RENTAL_ERRORS} from '../actions/house_actions';

const rentalerrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RENTAL_ERRORS:
            return action.errors;
    
        default:
            return state;
    }
}

export default rentalerrorsReducer;