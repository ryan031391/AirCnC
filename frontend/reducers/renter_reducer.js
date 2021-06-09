import { RECEIVE_HOUSE } from '../actions/house_actions';

const renterReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HOUSE:
            return Object.assign({}, state, action.renters)
    
        default:
            return state;
    }
}

export default renterReducer