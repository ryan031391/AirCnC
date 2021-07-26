import { RECEIVE_RESERVATION } from '../actions/house_actions'

const reservationReducer = ( state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, action.rentals)
    
        default:
            return state;
    }
}

export default reservationReducer