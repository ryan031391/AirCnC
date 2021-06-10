import {RECEIVE_REVIEW_ERRORS} from '../actions/house_actions';

const reviewerrosReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
    
        default:
            return state;
    }
}

export default reviewerrosReducer;