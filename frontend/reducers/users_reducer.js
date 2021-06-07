import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_REVIEW } from '../actions/house_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const nextState = Object.assign({}, state);
      nextState[action.currentUser.session_token] = action.currentUser
      return nextState

    default:
      return state;
  }
};

export default usersReducer;