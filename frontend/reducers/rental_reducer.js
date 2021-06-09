import { RECEIVE_HOUSE } from '../actions/house_actions';

const rentalReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HOUSE:
            return Object.assign({}, state, action.rentals)
    
        default:
            return state;
    }
}

export default rentalReducer