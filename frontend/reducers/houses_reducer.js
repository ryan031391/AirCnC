import {
    RECEIVE_HOUSE, 
    RECEIVE_HOUSES, 
    RECEIVE_REVIEW
} from '../actions/house_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const housesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HOUSES:
            return Object.assign({}, action.houses);
        case RECEIVE_HOUSE:
            nextState[action.house.id] = action.house;
            return nextState;
        case RECEIVE_REVIEW:
            nextState[action.review.house_id].reviewId.push[review.id];
            // nextState[action.review.house.id].average_score = action.average_score;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
    
        default:
            return state;
    }
}

export default housesReducer;