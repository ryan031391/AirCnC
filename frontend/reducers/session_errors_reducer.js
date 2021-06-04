import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import {OPEN_MODAL} from '../actions/modal_actions';

const sessionerrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case OPEN_MODAL:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
    
        default:
            return state;
    }
}

export default sessionerrorsReducer;