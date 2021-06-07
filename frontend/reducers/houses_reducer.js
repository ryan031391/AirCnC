import {
    RECEIVE_HOUSE, 
    RECEIVE_HOUSES, 
    RECEIVE_REVIEW
} from '../actions/house_actions'

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
            return nextState;
    
        default:
            return state;
    }
}

export default housesReducer;