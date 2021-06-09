import {
    RECEIVE_HOUSE,
    RECEIVE_REVIEW
} from '../actions/house_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_HOUSE:
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;

        default:
            return state;
    }
}

export default ReviewsReducer