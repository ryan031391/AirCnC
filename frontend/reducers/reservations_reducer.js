import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/house_actions'

const reservationReducer = ( state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, action.rentals)
        case REMOVE_RESERVATION:
            const nextState = Object.assign({}, state)
            delete nextState[action.house_id]
            return nextState
    
        default:
            return state;
    }
}

export default reservationReducer